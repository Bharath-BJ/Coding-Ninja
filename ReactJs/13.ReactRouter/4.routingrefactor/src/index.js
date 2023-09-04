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

/*Routing refactor
Send Feedback
Refactor the React app to use Routing instead of Conditional Rendering.


Note: Add role="img" attribute to the image elements of the react components.


Display the Home, List and Contact pages using Client Side Routing instead of Condtional Rendering.
Note: The Home page should render on "/", List page on "/list" and Contact page on "/contact" route.
Expected Output: Downloaded as output */