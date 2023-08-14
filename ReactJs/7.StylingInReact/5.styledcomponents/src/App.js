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

// To employ styled components in react, we have to install styled-components@5.3.10 or styled-components@latest with mentioning version
// Mentioning version while installing is very important, if not CRA will throw error
// Then we import styled object from "styled-components"
// Using styled obj by targeting html element we can pass styling with it's CSS syntax inside template literal to create styled component
// Then we can use created component just like a native html elements

// We can also create styled component as a separate module, by convention <file_name>.styled.css
// Then we can import all created styled components from the styled.css file just like ESM Eg: 7.StylingInReact > 12.buttonvariant
