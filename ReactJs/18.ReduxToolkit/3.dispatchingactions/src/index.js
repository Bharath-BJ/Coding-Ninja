import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// Unlike react-redux here in redux toolkit, action constants & action creators are taken care by toolkit
// So we can directly access actions from slices and export to use
// Exported action can be used in the dispatch(actions(payload)) function  