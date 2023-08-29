import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

/*Expense Tracker - V
Send Feedback
Now that you have improved the code structure and reduced the complexity, the team has asked you to implement a feature to edit an expense within the list.
Clicking the edit icon should automatically populate the form with the expense's text and amount. The form's title and submit button should have the text "Edit transaction."
Expected Output: Downloaded as output */

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
