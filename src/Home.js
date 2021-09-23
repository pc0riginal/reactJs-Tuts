import {useEffect, useState} from 'react' //it called hooks
import BlogList from './BlogList' 
import Loding from './Loding'
import {Modal,Button} from 'react-bootstrap'


function Home() {
    let [blogs,setBlogs] = useState([])
    let [isPanding,setPanding] = useState(true)
    let [error,setError] = useState(null)

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter((blog)=> blog.id !== id
        )  // true will be remain others will be deleted
        setBlogs(newBlogs)        
    }
    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:8000/blogs")
            .then(res =>{
                if (!res.ok){
                    throw Error('request resource not found!')
                }
                return res.json()
            })
            .then(data =>{
                setBlogs(data)
                setPanding(false)
                setError(null)
            })
            .catch((err)=>{
                setPanding(false)
                setError(err.message)
            })
        },1000)
    },[])

    const handleClose = ()=>{
        setError(null)
    }
    let code_title = "coding blogs"
    return ( 
        <div className="content">
           {/* <h1>Home</h1> */}
            { blogs && <BlogList blogs={blogs} codeTitle={code_title} handleDelete={handleDelete}></BlogList> }
            { error && 
            <Modal show={error} onHide={handleClose} size="sm"
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