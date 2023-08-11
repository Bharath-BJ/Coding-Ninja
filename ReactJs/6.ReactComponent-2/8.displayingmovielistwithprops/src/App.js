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

// As we have moved all states and event handlers from child to parent already 
// Now we created array of movies in separate files then importing it into movielist's state
// Then to render each movie card with it's own value, we use map function to iterate the movies array and pass each movie obj as props