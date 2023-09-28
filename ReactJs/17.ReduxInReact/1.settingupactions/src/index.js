import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <App />
  </React.StrictMode>
);

/*  In this app, we used the conventional prop drilling to pass the values from the root app component
    Now we are going to use redux to make centralized state management

    We will scale the actions, reducers and store for huge application by dividing them into separate folders
 */
