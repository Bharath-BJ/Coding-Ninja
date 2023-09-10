import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";

function App() {
  // Task 1 is to change component rendering into route rendering using nested routes
  let router=createBrowserRouter([
    {path:"/",
    element:<Nav/>,
    children:[
      {index:true,element:<Hero/>},
      {path:"courses",
      children:[
        {index:true,element:<Courses/>},
        {path:"details/:id",element:<Details/>},
      ]},
      {path:"learn/:id",element:<Learn/>}
    ]
  }]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}


export default App;
