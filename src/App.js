import * as React from "react";
import { Box, CssBaseline } from "@mui/material";

import TopNavigation from "./components/Navigation/TopNavigation";
import LeftNavigation from "./components/Navigation/LeftNavigation";

import { Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopNavigation />
      <LeftNavigation />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
