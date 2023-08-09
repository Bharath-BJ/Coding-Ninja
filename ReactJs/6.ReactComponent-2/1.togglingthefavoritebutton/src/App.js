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

// Toggling both favourite and Add to cart button can be done by appending two more boolean states as fav, carted
// We can simply the code for both buttons as shown instead of rendering different buttons based on condition
