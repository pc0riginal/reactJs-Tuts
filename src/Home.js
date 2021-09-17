import {useState} from 'react'
import BlogList from './BlogList' 

function Home() {
    let [blogs,setBlogs] = useState([
        {title:'coding',body:'coding is fun',author:'pc',id:1},
        {title:'python',body:'coding is coding',author:'vishal',id:2},
        {title:'javascript',body:'coding is fun but not easy',author:'pc',id:3},
    ])
    let code_title = "coding blogs"
    return ( 
        <div className="content">
            <h1>Home</h1>
            <BlogList blogs={blogs} codeTitle={code_title}></BlogList>
            <BlogList blogs={blogs} codeTitle={"Category"} author={'pc'}></BlogList>

        </div>
     );
}

export default Home;