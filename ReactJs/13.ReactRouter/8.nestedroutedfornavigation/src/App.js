import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import { Navbar } from "../../5.predefinedroutes/src/components/Navbar";

function App() {
  // ******* Nested routes using createRoutesFromElements also be done ***************
  // const routes = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Navbar />}>
  //       <Route index element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/items" element={<Items />} />
  //       <Route path="/items/:id" element={<ItemDetails />} />
  //     </Route>
  //   </>
  // );
  // const router = createBrowserRouter(routes);

  const router =createBrowserRouter([
        {
          path:"/",
          element:<Navbar/>,
          children:[
              {path:"",element:<Home/>},
              {path:"/about",element:<About/>},
              {path:"/items",element:<Items/>}
            ]
        }]);


  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
