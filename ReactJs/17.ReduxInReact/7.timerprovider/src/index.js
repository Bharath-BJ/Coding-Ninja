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

/*Timer provider
Send Feedback
Debug the react app to provide store access to the components.
Provide the store access the components that need access to the state values.
Expected Output: Downloaded as output */