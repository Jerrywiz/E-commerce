/** @format */

import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <Box mt={10} ml={15} mr={10}>
      <Box>
        <Box>
          <Typography variant="h4">
           
          </Typography>
        </Box>
      </Box>

      {children}
    </Box>
  );
}
