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


// In general we would use anchor tag for routing, here also it works as expected
// But the problem is default nature of anchor tag is to refresh while routing which is undesirable in Single page application
// So we can use Link tag routing mechanism from react router dom