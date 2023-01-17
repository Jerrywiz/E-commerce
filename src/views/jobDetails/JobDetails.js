import React from "react";

import { Box, Button, Grid, Typography } from "@mui/material";
import { jobDetails } from "../../componets/common/mock";
import PublicIcon from "@mui/icons-material/Public";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const JobDetails = () => {
  return (
    <Grid container m={10}>
      <Grid md={3} >
        <Box mb={5} display="flex">
        <KeyboardBackspaceIcon sx={{color:"#1E86FF", mr:2}}/> 
        <Link style={{color:"#1E86FF"}} to="/">Back to search</Link>
        </Box>
       
        <Typography variant="body2" sx={{color:"#B9BDCF"}}>HOW TO APPLY</Typography>
        <Typography >
          Please email a copy of your <Typography> resume and online portfolio to </Typography>
           <Link style={{color:"#1E86FF",}}>
          {jobDetails.website}</Link>
        </Typography>
      </Grid>
      <Grid md={7} ml={2}>
        <Box display="flex">
          <Typography variant="h3" mr={5}>
            {jobDetails.role}
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "white", border: "1px solid #334680", radius:"4px" }}
          >
            {jobDetails.type}
          </Button>
         
        </Box>
        <Box display="flex">
          <AccessTimeIcon sx={{color:"#B9BDCF", height:"20px"}} />
          <Typography variant="body2" sx={{color:"#B9BDCF", ml:1}}>
            {jobDetails.day} days ago
          </Typography>
        </Box>
       
        
        <Box mt={5}>
          <Typography variant="body2" sx={{color:"#334680", fontSize:"bold"}}>{jobDetails.name}</Typography>
        </Box>

        <Box display="flex" mt={1} >
        <PublicIcon sx={{color:"#B9BDCF", height:"20px"}} />
          <Typography variant="body2" ml={0.5} sx={{color:"#B9BDCF"}}>{jobDetails.location}</Typography>
        
        </Box>

        <Typography mt={5}>{jobDetails.content}</Typography>
      </Grid>
    </Grid>
  );
};

export default JobDetails;
