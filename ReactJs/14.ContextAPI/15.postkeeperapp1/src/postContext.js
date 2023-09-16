import { useState, createContext, useContext } from "react";

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
        return savedPosts.find(elem=> elem.id===post.id);
    }
    const savePost = (post) => {
        const isSaved = isPostSaved(post);
        if (isSaved) {
          return alert("Post is already saved.");
        }
        setSavedPosts((prev) => [post, ...prev]);
      };

    function handleReset()
    {
        setSavedPosts([]);
    }
    return(<>
        <postContext.Provider value={{savedPosts,setSavedPosts,showSavedList,setShowSavedList,
             savePost,isPostSaved, handleReset}}>
            {props.children}
        </postContext.Provider>
    
    </>)
}

export {useValue};
export default CustomPostContext;