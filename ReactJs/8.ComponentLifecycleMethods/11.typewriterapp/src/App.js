import React from "react";
import Name from "./components/Name";
import "./styles.css";
/**
 * Typewriter App
Send Feedback
Your friend has created a name displayer where each character of the name is added to the UI after every 0.5 seconds. Now you both decided to collaborate on this project, and you are expected to add the following functionality.

create a button that starts and stops the printing of characters.

Expected Output: Downloaded as output
 */
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showName: false
    };
  }

  // Function to toggle the showName state
  toggleShowName = () => {
    this.setState({showName:!this.state.showName});
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShowName} className="button-85">
          {this.state.showName ? "Stop" : "Start"}
        </button>
        <Name showName={this.state.showName} />
      </div>
    );
  }

  
}
