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


// Now we are here going to display the title of blog as soon as blog submitted
// So we can employ useEffect() with dependency on blogs array 
// Since useEffect() will be executed during mounting as well, we can provide condition to update doc.title only when blogs array has elements
// And When title is empty, we can update doc.title as No blog