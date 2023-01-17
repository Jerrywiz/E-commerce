/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query"
import "./index.css";
import App from "./App";
import theme from "./theme";
import { ThemeProvider } from "@mui/system";
import { BrowserRouter } from "react-router-dom";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      cacheTime: 60000,
      refetchOnWindowFocus: false
    },
    mutation: {
      useErrorBoundary: false
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
