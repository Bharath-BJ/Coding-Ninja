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

/* Multiple reducers
Send Feedback
Create action creators and a reducer function to handle states of a counter.
Define actions constants and action creators to implement increment, decrement and reset counter functionality.
Create and export a counter reducer function to manage these state of a simple counter.
Combine the timer and counter reducer functions and add them inside the Redux store.
Dispatch actions to increment, decrement and reset the counter.
Expected Output: Downloaded as output */