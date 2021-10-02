import BlogList from './BlogList' 
import Loding from './Loding'
import {Modal,Button} from 'react-bootstrap'
import useFetch from './useFetch'
import { useHistory } from 'react-router'

function Home() {
    const {blogs,isPanding,error,setBlogs,setError} = useFetch("http://localhost:8000/blogs")
    const history = useHistory()
    const handleDelete = (id)=>{
        const newBlogs = blogs.filter((blog)=> blog.id !== id)  // true will be remain others will be deleted
        
        fetch("http://localhost:8000/blogs/"+id,{
            method:'DELETE'
        })
        .then(()=>{
            setBlogs(newBlogs) 
            // history.push('/')
        })
        .catch((err)=>{
            alert(err.message)
        })
               
    }
    

    const handleClose = ()=>{
        setError(null)
    }
    let code_title = "coding blogs"
    return ( 
        <div>
            { blogs && <BlogList blogs={blogs} codeTitle={code_title} handleDelete={handleDelete}></BlogList> }
            { error && 
            <Modal show={error} onHide={handleClose} size="sm" backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header>
                    <Modal.Title ><h2 className='text-danger'>Error</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-danger'>{error}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            }
            { isPanding && <Loding />}
        </div>
     );
}

export default Home;