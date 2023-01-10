/** @format */

import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <Box mt={10} ml={15}>
      <Box>
        <Box>
          <Typography variant="h3">
            GitHub
            <span style={{ fontSize: "36px" }} variant="body2">
              Jobs
            </span>
          </Typography>
        </Box>
      </Box>

      {children}
    </Box>
  );
}
