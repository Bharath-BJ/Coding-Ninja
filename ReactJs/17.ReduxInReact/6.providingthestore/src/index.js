import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <App />
  </React.StrictMode>
);

/*  There is another library called react-redux which built on top of redux which provides
    (i)  Provider Component for providing scope of store where are the components that requires store (in the root app component)
    (ii) Hooks like useDispatch() & useSelector(selector function)
 */
