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


// So we have our blogging app where we type title & content through forms and displaying below
// Here we employed useState() for both title and content as usual
// For Blogs we have used array as state, different thing here is we have use spread/rest operator for updating and push method is not recommended
// Then we display the Blogs using map method
