function Home() {
    const clickEvent = (name,e)=>{
        console.log("clicked!",name)
        console.log(e.target)
    }
    return ( 
        <div className="content">
            <h1>Home</h1>  
            {/* <button onClick={clickEvent}>Click me</button>  */}
            <button onClick={
                (e) =>{
                   clickEvent('paras',e) 
                }
            }> Click me Again</button>
        </div>
     );
}

export default Home;