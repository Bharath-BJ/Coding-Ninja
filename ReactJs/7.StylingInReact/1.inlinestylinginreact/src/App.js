import MovieList from "./MovieList";
import Navbar from "./Navbar";
import "./styles.css"


function App() {
  return (
    <>
        <Navbar/>
        <MovieList/>
    </>
  );
}

export default App;

// To employ inline styling in react, we can pass js styling obj as a value of style attribute following strict JSX syntax
// Caveat following inline styling can lead to messy code structure