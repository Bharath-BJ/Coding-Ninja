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


// Task 4
// Create route for start learning inside each course
// That course chapter list should be displayed
// learn is children of navbar only