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

// To employ internal styling in react, we can create style objects separately then pass them as a value of style attribute following strict JSX syntax
// Following internal styling can prevent messy code structure to some extend
// But both inline and internal styling overides external styles
// Also both inline and internal styling does not apply pseudo class or pseudo element support( but supports dynamic styling)