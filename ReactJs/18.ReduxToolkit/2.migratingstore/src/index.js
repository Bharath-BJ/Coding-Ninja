import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// Redux toolkit is simple, opinionated, powerful & effective library used over react-redux due to following reasons
// 1. react-redux complexity in configuring the action creators and boiler templates
// 2. react-redux is diffcult to debug whereas it is easy in case of redux toolkit
// 3. react-redux was diffcult manage asynchoronous code which may result in other edge cases

// No need of action constants and action creators in redux toolkit Note : Refer only revised reducer folder
// We split the whole app features into multiple slices and create the slice using createSlice() from which reducer is extracted
// createSlice(obj with name of feature, initialState & reducer of all funtionalities) 
// Then extract reducer from slice and export to use

// Here reducers extracted from different slices are imported in the store, then using configureStore(reducer obj with all reducers)
// we configured the reducers with the store, unlike the react-redux we don't need combinedReducer() for multiple reducers