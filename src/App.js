/** @format */

import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from 'react-router-dom';
import DashBoard from "./views/dashboard";
import JobDetails from "./views/jobDetails/JobDetails";

const App = () => {
  
  return(
    <Router>
  <DashBoard />
  <JobDetails />
  </Router>
)

};

export default App;
