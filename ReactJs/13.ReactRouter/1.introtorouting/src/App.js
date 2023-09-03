import {useState} from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";

function App() {
  let [page,setPage]=useState("home");

  return (
    <>
      <Navbar setPage={setPage}/>
      {page==="home" && <Home/>}
      {page==="about" && <About/>}
      {page==="items" && <Items/>}
    </>
  );
}

export default App;
