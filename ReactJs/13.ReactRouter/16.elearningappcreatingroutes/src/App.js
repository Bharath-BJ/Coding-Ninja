import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";

function App() {
  // Task 1 is to change component rendering into route rendering using nested routes
  let router=createBrowserRouter([
    {path:"/",
    element:<Nav/>,
    children:[
      {index:true,element:<Hero/>},
      {path:"courses",element:<Courses/>}
    ]
  }]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
