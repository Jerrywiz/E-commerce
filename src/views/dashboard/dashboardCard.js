import React from "react"
import { CardContent, CardActionArea } from "@mui/material"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"

import Card from "@mui/material/Card"





const DashboardCard = ({ Data, index }) => {
  
  
  return (
   
        <Card>
          <CardActionArea sx={{ pointerEvents: "none" }}>
          <CardContent >
                <Typography>
                 {Data?.name}
                </Typography>
                <Typography>
                 {Data?.description}
                </Typography>
                <Box display="flex" justifyContent="space-between">
<Typography>{Data?.type}</Typography>
<Box display="flex">
<Typography mr={5}>{Data?.Location}</Typography>
<Typography> {Data?.day}</Typography>
</Box>
                </Box>
              </CardContent>

             
         
          </CardActionArea>
        </Card>
    
  )
}

export default DashboardCard
