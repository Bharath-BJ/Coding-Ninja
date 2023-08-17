import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";
/**
 * You decide to build a TODO App with the following functionality.


Adding text to the input and clicking add should add the new todo to the list and click on the red button should remove it from the list.
You have built individual components like List, Todo, and Form. You are trying to add a new to-do, but it does not get added to the list. Find a way to fix this issue.
Note: Do not remove the 3 default todo items provided inside of the state.


Expected Output: Downloaded as output
 */
export default class App extends Component {
  // add constructor and state here
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  // create handleAdd and handleRemove functions here
  handleAdd=()=>{
    this.state.todos.push({text:this.state.text});
    this.setState({
      todos:this.state.todos,
      // text:""
    });
  }

  handleRemove=(todo)=>{
    let {todos}=this.state;
    let index=todos.indexOf(todo);
    todos.splice(index,1);
    this.setState({
      todos:this.state.todos
    });
  }
  render() {
    

    return (
      <div className="App">
        <span>Todo</span>
        <Form text={this.state.text} handleChange={this.handleChange} handleAdd={this.handleAdd}/>
        <List todos={this.state.todos} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}
