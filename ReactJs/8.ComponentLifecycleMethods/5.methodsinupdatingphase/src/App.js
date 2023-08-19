import  ComponentA from "./ComponentA";
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <Timer/>
    </div>
  );
}

export default App;

/** We know Updating phase triggered only when states or props changes and re-rendering the App
 *  In case of Updating phase, the sequence of function calls happens as follows
    getDerivedStateFromProps() --> shouldComponentUpdate(nextProps,nextState) --> render() --> 
    getSnapShotBeforeUpdate(prevProps,prevState) --> componentDidUpdate(prevProps,prevState,snapShot)
 *  
 * 
 */