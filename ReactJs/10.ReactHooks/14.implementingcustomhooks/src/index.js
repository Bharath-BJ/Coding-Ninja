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

// So to get the email when coming back to login page from the reset page
// we can get the email using another useEffect() remember to place this useEffect() before the set email useEffect() as order of hooks matters
// Coz if set email executed it will be updated to empty string  
