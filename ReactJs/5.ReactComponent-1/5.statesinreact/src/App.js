import { MovieCard } from "./MovieCard";
import "./styles.css"


function App() {
  return (
    <>
        <h1>Movie App</h1>
        <MovieCard/>
    </>
  );
}

export default App;

// States are component-specific memory, also called as 'single source of truth' 
// It's built-in obj used to store the dynamic information for the react-component 
// it's initial state has to be assigned in the constructor of a class
// A component's state is mutable and it can change over time. Whenever it changes, the component re-renders.


// In the next session, we will handle event in react app
