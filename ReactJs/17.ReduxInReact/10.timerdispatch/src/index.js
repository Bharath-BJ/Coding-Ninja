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

/*Timer dispatch
Send Feedback
Dispatch appropriate actions to make the Timer app function correctly.
Dispatch actions for increment, start, pause and reset timer functionality by using the provided action creators.
Expected Output: Downloaded as output

 */