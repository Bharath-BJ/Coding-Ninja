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


// We know our App will have many states and it's event handlers to update it's value where useState() is employed
// We can consolidate the event handlers to particular state into a single reducer function by employing useReducer() 
// syntax : let [<state_variable>,dispatch]=useReducer(reducer_function,intial_Arg,init?);
// Whenever we need to update the initialized state we can send the type and necessary value of action obj to reducer function through dispatch() function
// Reducer(state,action) must be outside of component and consists of eventhandlers of particular state executed using switch case 
// state --> states of components; action --> Object to received from dispatch function
// Refer examples in 10.blogusingusereducer > src > Components > Blog.js