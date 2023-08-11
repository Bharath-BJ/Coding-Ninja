import MovieList from "./MovieList";
import "./styles.css"


function App() {
  return (
    <>
        <h1>Movie App</h1>
        <MovieList/>
    </>
  );
}

export default App;

// Here we have moved all states and event handlers from child to parent
// Then pass the children specific values from parent as props to render child with it's own dynamic content