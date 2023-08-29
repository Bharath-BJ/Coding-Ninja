import { useReducer, useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function expenseReducer(state,action)
{
    switch(action.type)
    {
      case "ADD":
        return [action.expense,...state];
      case "DELETE":
        return state.filter(elem=> elem.id!==action.id);
      case "EDIT":
        let expensesDuplicate=state;
        expensesDuplicate[action.index]=action.expense;
        return expensesDuplicate;
      default :
        return [];
    }
}
function App() {
  const [expenses, dispatch] = useReducer(expenseReducer,[]);
  const [expenseToUpdate,setExpenseToUpdate]=useState(null);

  // Create function to add an expense
  function handleAddTransaction(expense){
    dispatch({type:"ADD",expense:expense});
  }

  // Create function to delete an expense
  function handleDeleteTransaction(id)
  {
    dispatch({type:"DELETE",id:id});
  }

  function resetExpenseToUpdate()
  {
    setExpenseToUpdate(null);
  }
  function handleEditTransaction(expense){
    let index=expenses.map(elem=> elem.id).indexOf(expense.id);
    dispatch({type:"EDIT",index:index,expense:expense});
    return true;
  }
  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm expenseToUpdate={expenseToUpdate} resetExpenseToUpdate={resetExpenseToUpdate} 
                    handleEditTransaction={handleEditTransaction} handleAddTransaction={handleAddTransaction}/>
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} setExpenseToUpdate={setExpenseToUpdate} handleDeleteTransaction={handleDeleteTransaction} />
        </div>
      </div>
    </>
  );
}

export default App;
