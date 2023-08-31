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


// We have already coded for add a blog
// Here we have coded to delete a blog either using filter or slice method of array
// Then we used useRef() to target title input so that we can bring the focus to title input after every submit