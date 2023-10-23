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

/**Selector functions
Send Feedback
Refactor the React app to use slice selector functions.
Define and export slice selector functions for the timer and counter.
Change the code to use selector functions instead of manually accessing the state slice values.

 * 
 */