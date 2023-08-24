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


// We have already coded for adding a Blog post but we can optimize the state structure by using form data as object
// And changing all the codes to match with the form data as object
// Here while updating the formData unlike setState in class component, here in functional component, 
// we have to code all properties or use spread operator