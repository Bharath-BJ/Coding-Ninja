import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = (props) => {
  let {expenses,handleDeleteTransaction}=props; 
   
  return (
      <div className={styles.expenseListContainer}>
        <h3>Transactions</h3>
        <ul className={styles.transactionList}>
          {expenses.map((elem,index)=> <Transaction 
                                              key={elem.id} 
                                              index={index} 
                                              expense={elem} 
                                              handleDeleteTransaction={handleDeleteTransaction}/>)}
        </ul>
      </div>
    );
};

export default ExpenseList;
