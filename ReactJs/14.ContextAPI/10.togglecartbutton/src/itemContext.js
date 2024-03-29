import { createContext, useContext } from "react";
import { useState } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

function useValue(){
    const value= useContext(itemContext);
    return value;
}

function CustomItemContext(props){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart,setShowCart]=useState(false);
    
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

    const toggleCart=()=>{
      setShowCart(!showCart);
    }
    return (<itemContext.Provider value={{ item,total, handleAdd, handleRemove, handleReset, toggleCart }}>
                {showCart && <CartModal/>}
                {props.children}
            </itemContext.Provider>);
}
export { itemContext, useValue };
export default CustomItemContext;