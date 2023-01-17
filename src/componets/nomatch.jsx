import React from "react"
import { Box, Typography, Button } from "@mui/material"
import PropTypes from "prop-types"


import { useNavigate } from "react-router-dom"


const NoMatch = ({ homeRoute }) => {
  const navigate = useNavigate()
 
  return (
    <Box display="flex" flexDirection="column" height="100vh" width="100%" backgroundColor="white">
      <Typography variant="h4" fontWeight="700" marginLeft="50px" marginTop="30px">
        {" "}
        IlimiKit Learning{" "}
      </Typography>
      <Box width="100%" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant="h6" mb="20px">
          Something went wrong
        </Typography>
       
        <Typography mt="40px" mb="15px" varaiant="small">
          We can&apos;t find the page that you are looking for{" "}
        </Typography>
        <Button  color="primary" onClick={() => navigate(homeRoute)}>
          Go back home
        </Button>
      </Box>
    </Box>
  )
}

NoMatch.propTypes = {
  homeRoute: PropTypes.string
}

NoMatch.defaultProps = {
  homeRoute: ""
}

export default NoMatch
