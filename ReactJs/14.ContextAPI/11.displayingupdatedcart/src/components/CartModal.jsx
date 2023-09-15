import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../itemContext";

function CartModal() {
  const {toggleCart,cart} = useValue();
  const total= cart.reduce((sum,elem)=> sum+elem.qty*elem.price,0);

  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggleCart}>
        Close
      </div>
      <div className={styles.clearButton} >
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map(elem=>(<div key={elem.id} className={styles.cartCard}> 
                          <h1>{elem.name}</h1>
                          <h3>X{elem.qty}</h3>
                          <h3>X{elem.qty*elem.price}</h3>  
                          </div>))}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>$ {total}</div>
      </div>
    </div>
  );
}

export default CartModal;
