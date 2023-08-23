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

// Limitations of Class components are 
// 1) It can be confusing at times as there is usage of 'this' keyword which is differnet from other languages
// 2) Hard to reuse the stateful logics b/w components coz we may need to lift the states at times
// 3) Complex components are difficult to understand due to lifecycle methods
// Hooks are the function that hooks the react lifecycle features into the functional components
// Like state in class components, we can employ component memory through useState() hooks
// syntax : [variable, setVariable]=useState();
// Here setVariable is used to update the state variable and re-render the App component
// variable is used to retain the updated value even after the App re-render

// Here states are used with both class and functional components

