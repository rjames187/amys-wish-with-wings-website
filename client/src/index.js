import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route, Redirect, useLocation} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Pages/Home/Home.js';
import About from './Pages/About/About.js';
import AWC from './Pages/AWC/AWC.js';
import Support from './Pages/Support/Support.js';
import Horses from './Pages/Horses/Horses.js';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        
        <Route path = "/" element = {<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/awc" element={<AWC/>}></Route>
        <Route path="/horses" element={<Horses/>}></Route>
        <Route path="/support" element={<Support/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
