/** @format */

import React from "react";
import { Grid, Checkbox, Typography } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const location = ["London", "AmsterDam", "uk"];

const DashboardPanel = () => {
  return (
    <Grid container spacing={2}>
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
      </Grid>
      <Grid>
 mmmmmmmmmmmmmmmmm
      </Grid>
    </Grid>
  );
};

export default DashboardPanel;
