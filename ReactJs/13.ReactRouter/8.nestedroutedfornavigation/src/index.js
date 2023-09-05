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


// Unlike previous repetitive navigation routing, here navbar act as parent to all 3 pages so it is inherited to all 3 pages
// For home page, route can be either empty meaning just base address or index:true
// One important step here is to add <Outlet/> at the end of navbar(parent) which renders current routing children