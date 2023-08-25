import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

/* Expense Tracker - II
Send Feedback
Now that you have changed the class components to functional components, the team has asked you to implement the feature to add and remove a transaction.
After adding or deleting a transaction, the balance, income, and expenses should be updated.
A user should not be able to add a transaction with a value of 0.
Income is the sum of all transactions with values greater than 0.
Expense is the sum of all transactions with values less than 0.
Note - Use the current Date as the id for the expense. {id: new Date().getTime()}

Expected Output: Downloaded as output */

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
