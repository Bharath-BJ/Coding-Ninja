import  ComponentA from "./ComponentA";

function App() {
  return (
    <div className="App">
      <ComponentA/>
    </div>
  );
}

export default App;

/** We know in Mount cycle only in componentDidMount() we can handle all side effects like 
 *  React Native DOM, Browser API, Fetch API, subscription, setTimeout() etc..
 *  Refer exercise in ComponentA component
 * 
 */