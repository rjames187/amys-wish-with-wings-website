import React from "react";
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";


import Home from './Pages/Home/Home.js';
import './App.css';


export default function App() {
  return (
    <div>
      <Home></Home>
      <Link to = "/home">click to go to home</Link>
    </div>  
  );
}


