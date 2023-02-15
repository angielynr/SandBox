import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const drawerWidth = 240;

const TopNavigation = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            ReactJS Sandbox
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNavigation;
