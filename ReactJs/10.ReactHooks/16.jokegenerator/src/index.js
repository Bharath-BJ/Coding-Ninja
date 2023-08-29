import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

/*Joke Generator
Send Feedback
You and your friend are building a joke generator.
While building the application, your friend realises that many API requests would be required to be made in different components.

So he has asked you to make a custom hook for fetching jokes that returns the joke data, loading status, error, and a function to fetch new jokes.
- Display "Loading..." when fetching data
- Display "Something went wrong" on error.
- Clicking the "New Joke" button should display a new joke.
Note:- The given boilerplate code must be used to render jokes fetched from an API, which can either be direct jokes or "setup-delivery" jokes. The rendering method should vary based on the type of joke received.
Expected Output: Downloaded as output
*/

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

