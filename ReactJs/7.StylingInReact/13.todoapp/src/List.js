import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
 
  render() {
    let {todos,handleRemove}=this.props;
    return (
      <div className="list">
        {todos.map((todo, i) => (
          <Todo key={i} todo={todo} handleRemove={handleRemove} />
        ))}
      </div>
    );
  }
}
