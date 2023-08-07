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

// We know for event handling in the react component we pass the function reference unlike calling in JS
// When we pass the function reference somewhere 'this' reference is lost, so we have to explicitly bind the current object
// Two ways to bind the current objects 
// 1. While passing the function reference in the component Eg: onClick={this.addStars.bind(this)}
// 2. Inside the constructor at top Eg: this.addStars=this.addStars.bind(this);
// We can also avoid binding by using arrow functions as it takes the current object by default

// In next session, we will handle event to increase the stars using setstate()
