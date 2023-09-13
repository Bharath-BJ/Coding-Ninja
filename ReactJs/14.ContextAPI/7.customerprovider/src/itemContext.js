import { createContext } from "react";
import { useState } from "react";

const itemContext = createContext();

function CustomItemContext(props){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    
    return (<itemContext.Provider value={{ item, setItem,total, setTotal }}>
                {props.children}
            </itemContext.Provider>);
}
export { itemContext };
export default CustomItemContext;