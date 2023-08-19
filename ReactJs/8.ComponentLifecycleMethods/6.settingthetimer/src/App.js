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

/** Here we have used both mounting and updating phase combined
 *  When component mounted inside componentDidMount() we have provided setInterval() to increase the time by one second 
 *  And we know ComponentDidUpdate() will be called after every re-rendering so we can clearInterval() depending on the condition 
 * 
 */