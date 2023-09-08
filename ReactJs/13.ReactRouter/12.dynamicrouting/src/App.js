import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import  Navbar  from "./components/Navbar";
import ItemDetails from "./pages/ItemDetails";

function App() {
  const router =createBrowserRouter([
        {
          path:"/",
          element:<Navbar/>,
          children:[
              {path:"",element:<Home/>},
              {path:"/about",element:<About/>},
              {path:"/items",element:<Items/>},
              {path:"/items/:id",element:<ItemDetails/>}
            ]
        }]);


  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
