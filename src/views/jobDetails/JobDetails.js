import React from "react";

import { Box, Button, Grid, Typography } from "@mui/material";
import { jobDetails } from "../../componets/common/mock";
import PublicIcon from "@mui/icons-material/Public";
import { Link } from "react-router-dom";
console.log(jobDetails.name);

const JobDetails = () => {
  return (
    <Grid container m={10}>
      <Grid md={3}>
        <Typography sx={{color:"#B9BDCF"}}>HOW TO APPLY</Typography>
        <Typography >
          Please email a copy of your resume and online portfolio to 
           <Link style={{color:"#1E86FF",}}>
          {jobDetails.website}</Link>
        </Typography>
      </Grid>
      <Grid md={7}>
        <Box display="flex">
          <Typography variant="h3" mr={5}>
            {jobDetails.role}
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "white", border: "1px solid #334680" }}
          >
            {jobDetails.type}
          </Button>
        </Box>
        <Box mt={5}>
          <Typography variant="h3">{jobDetails.name}</Typography>
        </Box>

        <Box display="flex" mt={2} >
        <PublicIcon />
          <Typography ml={2} sx={{color:"#B9BDCF"}}>{jobDetails.location}</Typography>
        
        </Box>

        <Typography mt={5}>{jobDetails.content}</Typography>
      </Grid>
    </Grid>
  );
};

export default JobDetails;
