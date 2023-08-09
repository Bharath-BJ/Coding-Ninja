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

// Here we created new Component called MovieList where MovieCard imported then exported to App Component
// Issue here is all the MovieCard in MovieList Component are carrying the hard coded same state
// In order to make MovieCard dynamic, we can pass the dynamic content from the MovieList(Parent) which is called Props  


// In next session, we will learn Props to pass content from parent to child