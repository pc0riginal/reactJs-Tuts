import { useEffect, useState} from "react";

const useFetch = (url) => {
    let [blogs,setBlogs] = useState([])
    let [isPanding,setPanding] = useState(true)
    let [error,setError] = useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res =>{
                if (!res.ok){
                    throw Error('request resource not found!') //user defined
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
    },[url]) 
    return {blogs,isPanding,error,setBlogs,setError}
}
 
export default useFetch;