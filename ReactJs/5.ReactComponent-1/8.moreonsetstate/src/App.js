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

// setState() is asynchoronous in nature so to get synchoronous code here, we can pass callback funtion as 2nd parameter
// which will be executed once setState() is executed and it works for both methods

// when we execute multiple setState() on event trigger,
// In method 1 only last setState() is executed as it combines all setState as single batch and then App is re-rendered 
// In method 2 all setState() are executed as it is overiding the prevState. But though all setState were executed still 
// App is re-rendered only once at last   
