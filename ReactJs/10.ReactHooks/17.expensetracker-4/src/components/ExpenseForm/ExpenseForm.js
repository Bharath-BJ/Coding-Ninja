import { useRef ,useEffect} from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const expenseTextInput = useRef("");
  const expenseAmountInput = useRef("");
  const {handleAddTransaction,expenseToUpdate,handleEditTransaction,resetExpenseToUpdate}=props;

  useEffect(()=>{
    if(!expenseToUpdate) 
      return;
    expenseTextInput.current.value=expenseToUpdate.text;
    expenseAmountInput.current.value=expenseToUpdate.amount;
  },[expenseToUpdate])
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseText = expenseTextInput.current.value;
    const expenseAmount = parseInt(expenseAmountInput.current.value);
    if (expenseAmount === 0) {
      return;
    }

    if(!expenseToUpdate)
    { 
      const expense = {
        text: expenseText,
        amount: expenseAmount,
        id: new Date().getTime()
      };
      handleAddTransaction(expense);
      clearInput();
      return;
    }

    // If the expense is set to update then these part will be executed
    const expense = {
      text: expenseText,
      amount: expenseAmount,
      id: expenseToUpdate.id
    };
    let result=handleEditTransaction(expense);
    if(!result)
      return;
    clearInput();
    resetExpenseToUpdate();
  };

  const clearInput = () => {
    expenseAmountInput.current.value = "";
    expenseTextInput.current.value = "";
  };


  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;
