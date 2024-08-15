import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Tab,
  Tabs,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const MainLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            borderRadius: 2,
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <Typography sx={{ fontStyle: "italic", mr: 2 }}>UPCYCLE</Typography>
          <TextField
            placeholder="Search"
            sx={{
              width: "100%",
              "& .MuiInputBase-root": { height: 20 },
              "& .MuiOutlinedInput-input": { fontSize: "8px" },
              "& .MuiSvgIcon-root": { fontSize: 15 },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "75%",
            boxShadow: 2,
            borderRadius: 3,
          }}
        >
          <Tabs
            value={activeTab}
            onChange={(event, newValue) => {
              setActiveTab(newValue);
            }}
            sx={{
              mt: 1,
              "& .MuiTabs-indicator": { bottom: "0px" },
            }}
          >
            {[
              "All Category",
              "Hot Offers",
              "Gift Boxes",
              "Projects",
              "Menu Items",
            ].map((panel) => (
              <Tab
                key={panel}
                label={panel}
                sx={{
                  fontSize: "10px",
                  padding: "0px 24px",
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Box>

      <Box ml={10} mt={2}>
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
