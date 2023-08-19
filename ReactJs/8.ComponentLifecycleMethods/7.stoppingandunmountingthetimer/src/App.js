import  ComponentA from "./ComponentA";
import { Component } from "react";
import Timer from "./Timer";

class App extends Component {
  constructor(){
    super();
    this.state={
      mount:false
    }
  }
  delTimer(){
    this.setState({mount:!this.state.mount});
}

  render(){
    return (
      <div className="App">
        {this.state.mount && <Timer/>}
        <button onClick={this.delTimer.bind(this)}> {this.state.mount?"Unmount":"Mount"}</button>
      </div>
    );
  }
}

export default App;

/** Now unmounting can be done by providing constrain for mounting itself, here in App mount state declared so when it is true component mounted
 *  So previously we had clearedInterval in componentDidUpdate() method depending on condition. Here as we mount based on 
 *  we can be clearInterval() during unmounting inside componentDidUnmounting()
 * 
 */