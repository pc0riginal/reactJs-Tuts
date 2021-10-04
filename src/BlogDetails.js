import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const params = useParams()
    const history = useHistory()
    const {blogs:blog,isPanding:isPending,error} = useFetch("https://codeblogserver.herokuapp.com/blogs/"+params.id)
    const handleDelete = () =>{
        fetch("https://codeblogserver.herokuapp.com/blogs/"+params.id,{
            method:'DELETE'
        })
        .then(()=>{
            history.push('/')
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loding...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;