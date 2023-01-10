/** @format */

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  color: {
    borderGray: "#CDCED9",
    bg: "#FDFAFF",
  },
  palette: {
    primary: {
      light: "#EFDCFE",
      main: "#7200CC",
    },
    secondary: {
      main: "#FFEADE",
      contrastText: "#FD9459",
    },
    background: "#FDFAFF",
    text: {
      light: "#6B6C7E",
      primary: "#393A4A",
      secondary: "#605E5C",
      disabled: "#A7A9BC",
    },
    cancel: {
      light: "#EFDCFE",
      main: "#7200CC",
    },
    success: {
      main: "#0A8043",
      dark: "#0A8043",
    },
    error: {
      main: "#DA1414",
    },
  },
  typography: {
    fontFamily: ["Outfit", "Roboto"].join(","),
    h2: {
      fontSize: "2.175rem",
    },
    h3: {
      fontSize: "1.75rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      fontSize: "1.125rem",
    },
    body1: {
      fontSize: "1rem",
    },
    // body2: '0.875rem'
    smBody: {
      fontSize: "0.75rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
