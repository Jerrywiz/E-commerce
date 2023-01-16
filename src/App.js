/** @format */

import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from 'react-router-dom';
import DashBoard from "./views/dashboard";

const App = () => {
  
  return(
    <Router>
  <DashBoard />
  </Router>
)

};

export default App;
