import {useEffect, useState} from 'react' //it called hooks
import BlogList from './BlogList' 
function Home() {
    let [blogs,setBlogs] = useState([])
    let [isPanding,setPanding] = useState(true)
    const handleDelete = (id)=>{
        const newBlogs = blogs.filter((blog)=> blog.id !== id
        )  // true will be remain others will be deleted
        setBlogs(newBlogs)        
    }
    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:800/blogs")
            .then(res =>
                res.json()
            )
            .then(data =>{
                setBlogs(data)
                setPanding(false)
            })
            .catch((err)=>{
                console.log(err.message)
            })
        },1000)
    },[])
    let code_title = "coding blogs"
    return ( 
        <div className="content">
           <h1>Home</h1>
            { blogs && <BlogList blogs={blogs} codeTitle={code_title} handleDelete={handleDelete}></BlogList> }
            { isPanding && <p>Loding...</p>}
        </div>
     );
}

export default Home;