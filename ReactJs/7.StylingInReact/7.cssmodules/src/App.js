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

// Let's say we have Component1.js and Component2.js both have same classname, even if we create external styling with common 
// classname and import that file into Component1.js both Components with same classname are affected as css is global scoped  

// Disadvantage of inline, internal and external styling was global scope which can be rectified by styled components & css modules
// To employ css modules firstly we have to create css module file as per convention Eg: <file_name>.module.css
// Then create required styling with corresponding class or id selector just like in external styling
// then we can import styles obj from <file_name.module.css> file
// Assign the corresponding style in element's classname or id attribute using styles obj