import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";

export default function App() {
  // refactor the code below
  const router = createBrowserRouter([
    {path:"/root",element:<Navbar/>,
    children:[
      { index: true, element: <Home /> },
      { path: "list", element: <List /> },
      { path: "/root/contact", element: <Contact />}
    ]}
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
