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


/*PostKeeper app
Send Feedback
Create a custom context provider and a hook to get the value of context in multiple components.


Note: Add role="img" attribute to the image elements of the react components.


Create a context to manage saved posts and a custom provider to consolidate all the context logic inside of a single file.
The post context should have add and reset post functionality such that it matches the given output gif.
Create a custom hook that returns the context value and use it inside components to reduce the need to repeatedly import the context and useContext hook in every file.
Expected Output: Downloaded as output */