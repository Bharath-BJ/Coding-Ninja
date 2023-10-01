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

/*Timer actions
Send Feedback
Define actions constants and action creators to implement start, pause, reset and increment timer functionality.
Create and export action constants and action creators to make the timer app function correctly.
Note: The action constants and action creators declared in the actions file should be consistent with the named imports in the reducer file and the App component.
Expected Output: Downloaded as output */