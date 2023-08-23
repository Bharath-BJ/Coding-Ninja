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


// Incase of class components all effects can be done either in componentDidMount() or componentDidUpdate() methods
// Whereas in case functional component both CDM and CDU methods can be replaced by using useEffect()
// syntax : useEffect(setup func, dependency array?) if dependency array not provided then setup executed on every state change 
// Here setup function is a callback function executing the sideeffect 
// setup function will definitely be executed once during mounting but it's execution during re-rendering is depends on the 
// states provided in the dependency array Eg: if it is empty array then setup func will not be executed during re-rendering
// To unsubscribe from the sideeffect we can either
// 1) Return the cleanup fucntion on the setup function
// 2) Or return callback function that in turn return cleanup function on the setup function