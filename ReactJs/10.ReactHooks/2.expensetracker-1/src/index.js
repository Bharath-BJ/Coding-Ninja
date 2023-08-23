import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

/* Expense Tracker - I
Send Feedback
You along with your friends have participated in a hackathon. The entire team has agreed upon building an expense tracker application. The designs for the application are completed.
You have been tasked with implementing the entire functionality. As a first step, you want to change the class based components to functional components and render them in the App.
Expected Output: same as before but with functional components */

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
