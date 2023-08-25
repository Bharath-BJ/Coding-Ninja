import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Create function to add an expense
  function handleAddTransaction(expense){
    setExpenses(prevExpenses => [expense,...prevExpenses]);
  }

  // Create function to delete an expense
  function handleDeleteTransaction(id)
  {
    setExpenses(prevExpenses=> prevExpenses.filter(e => e.id!==id));
  }

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm handleAddTransaction={handleAddTransaction}/>
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} handleDeleteTransaction={handleDeleteTransaction}/>
        </div>
      </div>
    </>
  );
}

export default App;
