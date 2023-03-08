import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const drawerWidth = 240;

const TopNavigation = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            ReactJS Sandbox
          </Typography>
          <Box>
            <a
              href="https://ph.linkedin.com/in/angielynrivera"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <LinkedInIcon sx={{ marginRight: "10px" }}></LinkedInIcon>
            </a>
            <a
              href="https://github.com/angielynr"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <GitHubIcon></GitHubIcon>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNavigation;
