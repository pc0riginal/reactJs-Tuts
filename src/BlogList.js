import { Link } from "react-router-dom";

const BlogList = ({blogs,codeTitle,handleDelete}) => {
    // let blogs = props.blogs
    // let title = props.codeTitle
    return (
        <div className="blog-list">
            <h2>{codeTitle}</h2>
            { blogs.map((blog)=>{
                return(
                    
                        <div className="blog-preview" key={blog.id}>
                            <Link to={`/blogs/${blog.id}`} >
                                <h2>{blog.title}</h2>
                                <p>written by : {blog.author}</p>
                            </Link>
                            <button onClick={()=>{handleDelete(blog.id)}} type='button' className='btn btn-danger'>Delete</button>
                        </div>  
                )
            })}
        </div>
    );
}
 
export default BlogList;