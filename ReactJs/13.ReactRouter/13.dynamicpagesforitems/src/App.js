import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";
import ItemDetails from "./pages/itemDetails";

function App() {
  /**** *** NESTED ROUTES****** */

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "items",  
        // Here items & item details are created with parent-children relation only for hierarchy,
        // Here for we don't want items page commonly inside item details so outlet is avoided  
          children:[
                  {index:true, element:<Items/>},
                  {path:":id", element:<ItemDetails/>}
          ]},
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
