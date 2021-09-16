import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Nuevo import Bootstrap para las CARDS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from './Cads/Cards'



ReactDOM.render(
  <React.StrictMode>
    <Card/>
  </React.StrictMode>,
  document.getElementById('root')
);


// SIN MODIFICACION
// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
