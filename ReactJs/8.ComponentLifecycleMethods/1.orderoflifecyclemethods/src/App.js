import  ComponentA from "./ComponentA";

function App() {
  return (
    <div className="App">
      <ComponentA/>
    </div>
  );
}

export default App;

/** We know the lifecycle of the React Component goes from Mounting --> Updating --> Unmounting --> Error handling
 *  1) Mounting: When a component is being created and inserted into the DOM.
    2) Updating: When a Component is being re-rendered due to any updates made to its state or props.
    3) Unmounting: When it is destroyed/ removed from the DOM. 
    4) Error Handling: When there is an error during rendering

    In case of Mounting cycle, the sequence of function calls happens as follows
    constructor() --> getDerivedStateFromProps() --> render() --> componentDidMount()

    Remember only after all child components mounted the parent will be mounted 
 */