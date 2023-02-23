import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  HomeTwoTone,
  QuizTwoTone,
  AppRegistrationTwoTone,
  Inventory2TwoTone,
  PeopleTwoTone,
  AccountTree,
} from "@mui/icons-material";

const LeftNavigation = () => {
  const drawerWidth = 250;

  const navigate = useNavigate();

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/home")}>
              <ListItemIcon>
                <HomeTwoTone />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/project")}>
              <ListItemIcon>
                <AccountTree />
              </ListItemIcon>
              <ListItemText primary={"Project Portal"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/productlist")}>
              <ListItemIcon>
                <QuizTwoTone />
              </ListItemIcon>
              <ListItemText primary={"Springboot Products API"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/starwarsapi")}>
              <ListItemIcon>
                <AppRegistrationTwoTone />
              </ListItemIcon>
              <ListItemText primary={"Star Wars API"} />
            </ListItemButton>
          </ListItem>

          {/* <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/todolist")}>
              <ListItemIcon>
                <Inventory2TwoTone />
              </ListItemIcon>
              <ListItemText primary={"To Do List"} />
            </ListItemButton>
          </ListItem> */}
        </List>

        <Divider />

        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon>
                <PeopleTwoTone />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default LeftNavigation;
