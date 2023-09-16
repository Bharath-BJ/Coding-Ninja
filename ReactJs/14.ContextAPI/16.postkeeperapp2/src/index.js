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

/*PostKeeper 2 app
Send Feedback
Complete the PostKeeper app by adding the unsave post functionality.


Note: Add role="img" attribute to the image elements of the react components.


Create a function to unsave the post in the context file and use it such that the output matches the expected output gif.
Expected Output: Downloaded as output */