import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    let [title,setTitle] = useState('')
    let [body,setBody] = useState('')
    let [author,setAuthor] = useState('vishal')
    let [isPending,setIsPending] = useState(false)
    const history = useHistory()

    const addblog = (e) =>{
        setIsPending(true)
        e.preventDefault() // it will prevent from page load
        const blog = {title,body,author}
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(blog)
        })
        .then( ()=>{
            setIsPending(true)
            history.push('/') // redirect to blogs
        })
        .catch((err)=>{
            alert(err.message)
            setIsPending(false)
        })
    }
    return ( 
        <div className='create'>
            <h1>Add blog</h1>
            <form onSubmit={addblog}>
                <label>Title</label>
                <input 
                    type="text"
                    required
                    value = {title} 
                    onChange = { (e) => setTitle(e.target.value)}
                />
                <label>Body</label>
                <textarea 
                    required
                    value = {body}
                    onChange = { (e) => setBody(e.target.value)}
                />
                <label>Author</label>
                <select 
                    required
                    value = {author}
                    onChange = { (e)=> setAuthor(e.target.value) }
                >
                    <option selected value="vishal">vishal</option>
                    <option value="pc">pc</option>
                    <option value="paras">paras</option>
                    <option value="gandhiji">gandhiji</option>
                </select>
                {!isPending && <button> create </button>}
                {isPending && <button disabled>Adding new blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;