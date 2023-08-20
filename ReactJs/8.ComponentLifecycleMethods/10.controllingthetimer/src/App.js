import  ComponentA from "./ComponentA";
import { Component } from "react";
import Timer from "./Timer";

class App extends Component {
  constructor(){
    super();
    this.state={
      timerOn:false
    }
  }
  handleTimerOn(){
    let {timerOn}=this.state;
    this.setState({timerOn: !timerOn});
}

  render(){
    return (
      <div className="App">
        <Timer timerOn={this.state.timerOn}/>
        <button onClick={this.handleTimerOn.bind(this)}> {this.state.timerOn?"Stop":"Start"}</button>
      </div>
    );
  }
}

export default App;

/** So here to start the timer we click the Start button so as timer starts while re-rendering, side effects 
 *  of timer should be in componentDidUpdate() based on the prevProps condition. Refer exercise in Timer.js
 * 
 */