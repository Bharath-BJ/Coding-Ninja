import { useReducer } from "react";
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
      default :
        return [];
    }
}
function App() {
  const [expenses, dispatch] = useReducer(expenseReducer,[]);

  // Create function to add an expense
  function handleAddTransaction(textRef,amountRef){
    amountRef=parseInt(amountRef);
    if(amountRef===0)
      return;
    let newTransaction={id:new Date().getTime(),text:textRef,amount:amountRef};
    // setExpenses([...expenses,newTransaction]);
    dispatch({type:"ADD",expense:newTransaction});
  }

  // Create function to delete an expense
  function handleDeleteTransaction(id)
  {
    // setExpenses(expenses.filter(e => e.id!==id));
    dispatch({type:"DELETE",id:id});
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
