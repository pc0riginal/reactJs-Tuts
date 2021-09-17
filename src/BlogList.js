const BlogList = ({blogs,codeTitle}) => {
    // let blogs = props.blogs
    // let title = props.codeTitle
    return (
        <div className="blog-list">
            <h2>{codeTitle}</h2>
            { blogs.map((blog)=>{
                return(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>written by : {blog.author}</p>
                    </div>    
                )
            })}
        </div>
    );
}
 
export default BlogList;