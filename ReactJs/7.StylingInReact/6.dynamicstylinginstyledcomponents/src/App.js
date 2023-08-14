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

// To make the styled component dynamic we can pass props as props obj is available to the styled component by default
// callback function can be used to make the value of particular style dynamic Eg: refer the Navbar
// we can also apply pseudo class using following syntax &:<psuedo class>{ required CSS} 

