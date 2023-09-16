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

/*useContext hook
Send Feedback
Change the app to use the useContext hook to access the value of context instead of the Consumer component
Refactor the app to use the useContext hook to get the value the context instead of the Consumer component.
 */