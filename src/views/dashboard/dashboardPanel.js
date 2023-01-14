/** @format */

import React from "react";
import { Grid, Checkbox, Typography, Box } from "@mui/material";
import { Jobs } from "../../mock";
import DashboardCard from "./dashboardCard";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const location = ["London", "AmsterDam", "uk"];

const DashboardPanel = () => {
  return (
    <Grid container spacing={3}>
      <Grid md={4}>
        <Typography variant="h5" >
          <Checkbox {...label} defaultChecked /> Full time
        </Typography>
        <Typography  variant="h4">
          Location
          {location.map((user) => (
            <div className="user">{user}</div>
          ))}
        </Typography>
      
      </Grid >
      <Grid md={8} >
        {Jobs.map((data, index) => (
         <Box mt={4}>
           <DashboardCard key={data.id} Data={data} index={index} />
         </Box>
        ))}
        </Grid>
     
      
    </Grid>
  );
};

export default DashboardPanel;
