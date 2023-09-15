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
    const [cart,setCart]=useState([]);
    
    const handleAdd = (prod) => {
        setTotal(total+prod.price);
        setItem(item+1);
        let index=cart.findIndex(elem=> elem.id===prod.id);
        if(index===-1)
          setCart([...cart,{...prod,qty:1}]);
        else
        {
          cart[index].qty++;
          setCart(cart);
        }
        console.log(cart);
      };
    
    const handleRemove = (prod) => {
      if(total<=0)
        return;
      setTotal(total-prod.price)
      setItem(item-1);
      let index=cart.findIndex(elem=> elem.id===prod.id);
      if(index!==-1)
      {
        if(cart[index].qty===1){
          setCart(cart.filter(elem=> elem.id!==cart[index].id));
        }
        else
        {
          cart[index].qty--;
          setCart([...cart]);
        }
      }
      console.log(cart);  
    };
    
    const handleReset= ()=>{
        setItem(0);
        setTotal(0);
        setCart([]);
    };

    const toggleCart=()=>{
      setShowCart(!showCart);
    }
    return (<itemContext.Provider value={{ item,total, handleAdd, handleRemove, handleReset, toggleCart, cart}}>
                {showCart && <CartModal/>}
                {props.children}
            </itemContext.Provider>);
}
export { itemContext, useValue };
export default CustomItemContext;