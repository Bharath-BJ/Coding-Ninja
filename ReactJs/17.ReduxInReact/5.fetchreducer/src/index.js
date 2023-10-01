import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Root from "./Root";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
/*Fetch reducer
Send Feedback
Create a reducer function to handle states of fetching data.
Create and export a reducer function that handles the loading, success and error states of fetching asynchronous data.
Hint: Examine the action creators and their parameters. Implement the logic of the reducer function accordingly.
Expected Output: Downloaded as output */