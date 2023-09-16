import { useState, createContext, useContext } from "react";
import {posts} from "./data";

// create post context here
const  postContext = createContext();

// Create custom hook that returns context value here
const useValue = ()=>{
    let value = useContext(postContext);
    return value;
}

// create a custom saved post provider here with add and reset functions
function CustomPostContext(props)
{
    const [savedPosts, setSavedPosts] = useState([]);
    const [showSavedList, setShowSavedList] = useState(false);

    function isPostSaved(post){
        return savedPosts.findIndex(elem=> elem.id===post.id);
    }
    function handleSavePost(post)
    {
        let index = isPostSaved(post);
        console.log(index);
        if(index===-1){
            index = posts.findIndex(elem=> elem.id===post.id);
            setSavedPosts([...savedPosts,posts[index]])
        }
        else{
            setSavedPosts(savedPosts.filter(elem=> elem.id!==post.id));
        }
        console.log(posts[index]);
        console.log(savedPosts);
    }

    function handleReset()
    {
        setSavedPosts([]);
    }
    return(<>
        <postContext.Provider value={{savedPosts,setSavedPosts,showSavedList,setShowSavedList,
             handleSavePost, isPostSaved, handleReset}}>
            {props.children}
        </postContext.Provider>
    
    </>)
}

export {useValue};
export default CustomPostContext;