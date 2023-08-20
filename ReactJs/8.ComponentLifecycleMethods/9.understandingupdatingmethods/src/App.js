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

/** Understanding the update method deeper, 
 *  1) shouldComponentUpdate() is accepting the nextProps(from parent Component after updation), nextState parameters
 *  2) getSnapShotBeforeUpdate() is accepting prevProps(from parent Component before updation), prevState parameters 
 *  3) componentDidUpdate() is accepting prevProps,prevState,snapShot returned from getSnapShotBeforeUpdate()
 * 
 */