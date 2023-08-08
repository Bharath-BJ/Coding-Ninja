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

// We know to change the dynamic content in the webpage using react we have to update a variable and re-render the root
// In case of function component with the global it is possible but with local variable and in case of class component we need state
// Using state we retain the value and setState() will take care of re-rendering the App
// Two ways to use setState() and both are useful when previous state matters 2nd method is preferred
// 1. setState({only property to update})
// 2. setState((prevState)=>{
//    return{
//        only property to update
//    };
// })

// In the next session, we will learn asynchoronous nature and batching of setState()