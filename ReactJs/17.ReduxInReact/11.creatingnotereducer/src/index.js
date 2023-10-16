import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <App />
  </React.StrictMode>
);

// While designing an application as we add more and more features into it, 
// we could create separate reducer for each features or one reducer to handle all the features 
// either way application is going to work but we are violating single responsible principle(SRP) 
// that is a module of an app should have single reason to change or single responsibility
// So from here on we will have reducer for every feature, so now we are creating noteReducer 
