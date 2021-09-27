import { useParams } from "react-router";

const BlogDetails = () => {
    const params = useParams()
    return ( 
        <div className="blog-details">
            <h1>blog details</h1>
            <h1>{params.id}</h1>
        </div>
    );
}
 
export default BlogDetails;