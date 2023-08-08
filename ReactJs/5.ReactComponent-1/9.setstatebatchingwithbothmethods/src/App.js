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

// when we execute multiple setState() on event trigger,
// In method 1 only last setState() is executed as it combines all setState as single batch and then App is re-rendered 
// In method 2 all setState() are executed as it is overiding the prevState. But though all setState were executed still 
// App is re-rendered only once at last   


// When we combine both the methods to setState(), then the last Method1 setState will make a single batch with all the setState 
// above(both method1 & method2) and executed. Then if any Method2 setState exist there after they all will also executed 