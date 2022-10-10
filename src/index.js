import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.js';


// ReactDOM.createRoot(<App />, document.querySelector('.root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
