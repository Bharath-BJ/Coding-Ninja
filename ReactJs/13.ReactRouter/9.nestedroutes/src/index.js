import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />,
  </StrictMode>
);


/*Nested routes
Send Feedback
Refactor the code to implement nested routes and display a shared Navbar component.
Change the code to make the top-level pages as nested routes of the Navbar component and remove the redundant imports of the component in each file.
 */


// Unlike previous navigation routing here navbar act as parent to all 3 pages so it is inherited to all 3 pages
// For home page route can be either empty meaning just base address or index:true
// One important step here is to add <Outlet/> at the end of navbar(parent) which renders current routing children