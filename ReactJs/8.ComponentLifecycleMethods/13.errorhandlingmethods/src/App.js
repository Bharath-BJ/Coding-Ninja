import  ComponentA from "./ComponentA";
import  ComponentB from "./ComponentB";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <ComponentA/>
      </ErrorBoundary>
      <ErrorBoundary>
        <ComponentB/>
      </ErrorBoundary>
    </div>
  );
}

export default App;

/** Here we are using the files from 3.causingsideeffects folder to handle error fallback UI
 *  Here we create ErrorBoundary Component with getDerivedStateFromError() and ComponentDidError() methods to throw error if any
 *  Now Error boundary can be wrapped around any Component to render fallback UI if error any
 *  Render method() in ErrorBoundary Component renders children if there is any no error if so fallback UI  
 *  We can also wrap each component ErrorBoundary so that only error occured component render fallback UI instead of whole App crashes
 */