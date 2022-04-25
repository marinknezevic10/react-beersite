import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './containers/Login';
import reportWebVitals from './reportWebVitals';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';


//this page is responsible for what will be visible on the webpage!!!REMEMBER THIS
ReactDOM.render(
  <React.StrictMode>
    <Login />
    <Dashboard />
    <Preferences />
   
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();