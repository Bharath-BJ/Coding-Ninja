import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

/* Expense Tracker - III
Send Feedback
You have added the required features to the app. Your team has requested that you consolidate the code by adding the logic in one place to enhance its structure and decrease complexity.
Expected Output: Downloaded as output */

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
