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


// Inorder to use the context API, we need to follow three steps
// 1. Create the context 
// 2. Provide the context by wrapping the neccessary children
// 3. Consume by either using Consumer component with callback function or with useContext() hooks