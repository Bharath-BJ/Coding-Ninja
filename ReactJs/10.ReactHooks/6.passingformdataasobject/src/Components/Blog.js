import {useState} from "react";

//Blogging App using Hooks
export default function Blog(){
    let [formData,setFormData]=useState({title:"",content:""});
    let [blogs,setBlogs]=useState([]);
    
    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e){
        e.preventDefault();
        setBlogs([...blogs,formData]);
        setFormData({title:"",content:""});
    }

    return(
        <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                {/* Row component to create a row for first input field */}
                <Row label="Title">
                        <input className="input" placeholder="Enter the Title of the Blog here.." 
                        value={formData.title} onChange={(e)=> setFormData({title:e.target.value,content:formData.content})}/> {/*Here all properties are coded */}
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content" placeholder="Content of the Blog goes here.." 
                        value={formData.content} onChange={(e)=> setFormData({...formData,content:e.target.value})}/> {/*Here spread operator is used */}
                </Row >

                {/* Button to submit the blog */}            
                <button className = "btn" onSubmit={handleSubmit}>ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
            {blogs.map((elem,index)=> <div className="blog" key={index}>
                                        <h3>{elem.title}</h3>
                                        <p>{elem.content}</p>
                                        <div className="blog-btn">
                                            <button className="btn remove">Delete</button>
                                        </div>
                                        
                                    </div>)}   
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
