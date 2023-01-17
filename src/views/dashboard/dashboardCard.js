import React from "react";
import { CardContent, CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import AccessTimeIcon from "@mui/icons-material/AccessTime";


import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

const DashboardCard = ({ Data }) => {
  return (
  <Link to="/jobdetails">
    <Card>
      <CardActionArea sx={{ pointerEvents: "none" }}>
        <CardContent>
          <Typography>{Data?.name}</Typography>
          <Typography>{Data?.description}</Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography>{Data?.type}</Typography>
            <Box display="flex">
            <PublicIcon/>
              <Typography mr={1} ml={1}>
                {Data?.Location}
              </Typography>
              <AccessTimeIcon />
              <Typography ml={1}>
              
                
                
                {Data?.day}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
 
  );
};

export default DashboardCard;
