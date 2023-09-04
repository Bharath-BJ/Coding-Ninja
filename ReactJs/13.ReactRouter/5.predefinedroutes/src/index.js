import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


/*Predefined routes
Send Feedback
Debug the React app to use pre-defined routes with React Router.
Fix the code to define and create routes for the Home, List and Contact pages with React Router. */