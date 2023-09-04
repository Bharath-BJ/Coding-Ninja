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

/*Using Link
Send Feedback
Add navigation links to the React app using the Link element of React Router.


Note: The links to the pages should have the same text as their name. Add role="img" attribute to the image elements of the react components.


Change the Navbar component to add links to the Home, List and Contact pages.
Expected Output: Downloaded as ouptut */


// Here the task is to navigate from home to list to contact to home page
// Naive approach is to add the navbar in all the 3 pages
// But react-router-dom provides us parent-children hierarchy to concat the navbar(parent) to all 3 pages(children)