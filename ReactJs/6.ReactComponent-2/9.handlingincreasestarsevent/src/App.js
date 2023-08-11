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
// Now to handle the events also we have to pass the eventHandlers as props to the child component and to change the state of 
// corresponding movie, we have pass the movie as parameter in eventHandler with which we can update the dynamic values of that movie