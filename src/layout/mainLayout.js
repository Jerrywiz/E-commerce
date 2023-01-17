/** @format */

import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import BackGroundImage from "../Assets/Background.png";

export default function MainLayout({ children }) {
  return (
    <>
      <Typography variant="h2" ml={10} mt={5}>Github Jobs</Typography>
      <Box ml={10} mt={5}>
        <Box>
          <Box>
            <Typography variant="h4">
              <Box
                sx={{
                  backgroundImage: `url(${BackGroundImage})`,
                  height: "138px",
                }}
              >
                <Box>
                  <TextField placeholder="Title, companies, expertise or benefits"></TextField>
                </Box>
              </Box>
            </Typography>
          </Box>
        </Box>

        {children}
      </Box>
    </>
  );
}
