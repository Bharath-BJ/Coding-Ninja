import { createContext, useContext } from "react";
import { useState } from "react";

const itemContext = createContext();

function useValue(){
    const value= useContext(itemContext);
    return value;
}

function CustomItemContext(props){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    
    const handleAdd = (price) => {
        setTotal(total+price);
        setItem(item+1);
      };
    
    const handleRemove = (price) => {
      if(total<=0)
        return;
      setTotal(total-price)
      setItem(item-1);
    };
    
    const handleReset= ()=>{
        setItem(0);
        setTotal(0);
    };
    return (<itemContext.Provider value={{ item,total, handleAdd, handleRemove, handleReset }}>
                {props.children}
            </itemContext.Provider>);
}
export { itemContext, useValue };
export default CustomItemContext;