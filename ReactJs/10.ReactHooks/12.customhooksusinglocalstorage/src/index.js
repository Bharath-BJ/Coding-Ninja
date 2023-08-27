import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// We got the boilerplate from the CN instructor for both login and reset page
// Here we have to execute the localStorage part to store the email in login page and use it in the reset page
// As we are synchoronising with external system we can employ useEffect() for this problem
// we can store email on everytime email changes, so email is provided in the dependency array of useEffect()
// Then in th reset page we can get the email value during mounting, so empty dependency array is provided
// Now problem is when we move from login page --> reset page --> then back to login page stored email value is lost
// This is because while coming back again email is set to empty string, we can rectify this issue by using another useEffect() to get the email 

