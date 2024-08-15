import React from "react";
import { Grid, Box, Card, Link, Typography, Paper } from "@mui/material";

import { Jobs } from "../../mock";
import DashboardCard from "./dashboardCard";
import { ReactComponent as Banner } from "../../Assets/Banner.svg";

const links = [
  "Automobiles",
  "Clothes and wear",
  "Home Interiors",
  "Computer and tech",
  "Tools, equipment",
  "Sports and outdoor",
  "Animal and pets",
  "Machinery tools",
  "Others",
];

const DashboardPanel = () => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: 4,
            flexDirection: "column",
            marginRight: "20px",
          }}
        >
          {links.map((text, index) => (
            <Link
              key={index}
              href="#"
              sx={{
                marginBottom: index < links.length - 1 ? 1 : 0,
                textDecoration: "none",
                width: "160px",
                color: "#1C1C1C",
                "&:hover": {
                  backgroundColor: "#B8F9E566",
                },
              }}
            >
              <Typography variant="h5">{text}</Typography>
            </Link>
          ))}
        </Box>
        <Box sx={{ p: 4 }}>
          <Banner />
        </Box>
        <Box sx={{ width: "220px" }}>
          <Paper
            sx={{
              backgroundColor: "#E3F0FF",

              mt: 4,
              height: "10rem",
            }}
          ></Paper>
          <Paper
            sx={{
              backgroundColor: "#55BDC3",

              mt: 4,
              height: "10rem",
            }}
          ></Paper>
        </Box>
      </Card>

      <Grid container spacing={3} mt={4}>
        <Grid item md={8}>
          {Jobs.map((data, index) => (
            <Box key={data.id} mt={4}>
              <DashboardCard Data={data} index={index} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardPanel;
