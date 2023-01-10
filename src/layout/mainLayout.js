/** @format */

import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <Box mt={10} ml={15}>
      <Box>
        <Box>
          <Typography variant="h1">GitHub Jobs</Typography>
        </Box>
      </Box>

      {children}
    </Box>
  );
}
