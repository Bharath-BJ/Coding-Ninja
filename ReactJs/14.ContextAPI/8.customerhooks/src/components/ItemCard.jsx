import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../itemContext";
 
function ItemCard({ name, price }) {

  let {handleAdd,handleRemove} = useValue();
  

  // We can also move handleAdd() and handleRemove() to context as well but price received from props 
  // should be sent as arguments to context
  
  // const handleAdd = () => {
  //   setTotal(total+price);
  //   setItem(item+1);
  // };

  // const handleRemove = () => {
  //   if(total<=0)
  //     return;
  //   setTotal(total-price)
  //   setItem(item-1);
  // };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd(price)}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(price)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
