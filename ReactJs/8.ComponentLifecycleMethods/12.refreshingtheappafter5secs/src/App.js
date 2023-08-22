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

/** To re-rendering the App based on certain condition we can make use of nextProps inside shouldComponentupdate()
 *  
 * 
 */