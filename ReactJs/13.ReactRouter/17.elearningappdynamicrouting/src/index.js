import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);


// Task 2 is to make dynamic routing for the each course card to display the course specific content 
// Here we can make use of useParams() hooks 