import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  // Add logic here to calculate the grand total, profit and expense amount here
  
  let {expenses}=props;
  let grandTotal= expenses.reduce((sum,curr)=> sum+curr.amount,0);
  let profit= expenses.reduce((sum,curr)=>{
    if(curr.amount>0) 
      return sum+curr.amount;
  return sum;
  },0);
  let expense=expenses.reduce((sum,curr)=>{
    if(curr.amount<0) 
      return sum+curr.amount;
  return sum;
  },0);
  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${grandTotal.toFixed(2)/* Grand total should be displayed here */}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${profit/*Total Profit Amount should be displayed here */}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${ expense/* Total expense amount should be displayed here */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
