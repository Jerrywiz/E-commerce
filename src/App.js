/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./views/dashboard";
import JobDetails from "./views/jobDetails/JobDetails";
import NoMatch from "./componets/nomatch";

const App = () => {
  
  return(
    <Routes>
      <Route path="/" element={<DashBoard/>} />
        <Route path="/jobdetails" element={<JobDetails />}/>
<Route path="404" element={<NoMatch />}/>
    
    </Routes>


 

)

};

export default App;
