import { Component } from "react";

export class Form extends Component {
  
  render() {
    return (
      <div className="form">
        <input
          onChange={this.props.handleChange}
          value={this.props.text}
          placeholder="Whats on your mind?"
          required
        />
        <button onClick={this.props.handleAdd}>Add</button>
      </div>
    );
  }
}
