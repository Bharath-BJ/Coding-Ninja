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

// While designing an application as we add more and more features into it, 
// we could create separate reducer for each features or one reducer to handle all the features 
// either way application is going to work but we are violating single responsible principle(SRP) 
// that is a module of an app should have single reason to change or single responsibility
// So from here on we will have reducer for every feature, so now we are creating noteReducer 

// As far as the store is concerned we can use single store for multiple features i.e multiple reducer
// Inorder to configure multiple reducers, redux library provides us combinedReducer(obj with all reducers as values) function
// Then result of combinedReducer() can be passed to createStore(result) function
// Remember that when multiple reducers, we cannot directly access the state using useSelector() instead we have to access the particular reducer then it's state
// Eg : useSelector(state=> state.todoReducer.todos)