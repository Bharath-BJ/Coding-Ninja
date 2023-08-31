import {useState,useRef,useEffect} from "react";
import {db} from "../firebaseInit";
import { addDoc, collection, deleteDoc,doc, getDocs } from "firebase/firestore";

//Blogging App using Hooks
export default function Blog(){
    let [formData,setFormData]=useState({title:"",content:""});
    let [blogs,setBlogs]=useState([]);
    let titleRef=useRef(null);
    
    useEffect(()=>{
        titleRef.current.focus();
    },[]);

    useEffect(()=>{
        async function fetchBlogs()
        {
            const querySnapshot = await getDocs(collection(db, "blogs"));
            const blogs=querySnapshot.docs.map(doc=> {
                return{
                    id:doc.id,
                    ...doc.data()
                }
            });
            setBlogs(blogs);
        }
        fetchBlogs();
    },[]);

    useEffect(()=>{
        if(blogs.length && blogs[0].title)  // Checking blogs.length as it will be executed during mounting as well
            document.title=blogs[0].title;
        else
            document.title="No blogs!!";
    },[blogs]);
    
    
    //Passing the synthetic event as argument to stop refreshing the page on submit
    async function handleSubmit(e){
        e.preventDefault();
        const blogRef= collection(db,"blogs");
        const docRef=await addDoc(blogRef,formData);
        setBlogs([{id:docRef.id,...formData},...blogs]);
        
        setFormData({title:"",content:""});
        titleRef.current.focus();
    }

    async function handleDelete(id){ 
        setBlogs(blogs.filter(elem=> elem.id!==id ))
        await deleteDoc(doc(db,"blogs",id));
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
                        <input  className="input"
                                placeholder="Enter the Title of the Blog here.."  
                                ref={titleRef}
                                value={formData.title} 
                                onChange={(e)=> setFormData({title:e.target.value,content:formData.content})}/> {/*Here all properties are coded */}
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content" 
                        placeholder="Content of the Blog goes here.." 
                        required
                        value={formData.content} 
                        onChange={(e)=> setFormData({...formData,content:e.target.value})}/> {/*Here spread operator is used */}
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
                                            <button className="btn remove" onClick={()=>handleDelete(elem.id)}>Delete</button>
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

    
   