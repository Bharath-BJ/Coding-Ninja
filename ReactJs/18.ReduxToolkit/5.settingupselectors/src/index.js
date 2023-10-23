import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// Advantages of using redux-toolkit over react-redux
// 1. Reducer - Action constants, action creators are created by framework itself and don't have to return the state
// 2. Store - reducers can be combined by framework so combined reducer is nor required
// 3. Selector - can be managed in reducer file itself

// Redux toolkit can be pre-configured with the create-react-app using the following command
// create-react-app <app-name> --template redux

