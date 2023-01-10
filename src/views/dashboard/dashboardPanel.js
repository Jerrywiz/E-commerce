/** @format */

import React from "react";
import { Grid, Checkbox, Typography } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const location = ["London", "AmsterDam", "uk"];

const DashboardPanel = () => {
  return (
    <Grid>
      <Grid>
        <Typography variant="h5" sx={{ color: "#334680" }}>
          <Checkbox {...label} defaultChecked /> Full time
        </Typography>
        <Typography sx={{ color: "#334680" }} variant="h4">
          Location
          {location.map((user) => (
            <div className="user">{user}</div>
          ))}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DashboardPanel;
