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


// We can also perform multiple side effects in a single component 
// Both class and functional components were done
// In case of class components, setInterval() and clearInterval() are in separate lifecycle methods
// whereas in case of functional components both setInterval() and clearInterval() are inside the useEffect() method only 