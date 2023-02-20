import React, { useState } from "react";
import { Typography, Box, TextField, Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import classes from "./Input.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function Input() {
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([
    {
      id: 1,
      name: "eat",
    },
    {
      id: 2,
      name: "sleep",
    },
  ]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (text) => {
    setTodo((prevTodo) => [
      ...todos,
      {
        id: Math.floor(Math.random() * 10),
        name: input,
        key: Math.floor(Math.random() * 10),
      },
    ]);
  };

  const onCompleteTaskHandler = () => {};

  const onFormSubmit = (event) => {
    event.preventDefault();
    addTodo(input);
    setInput("");
  };

  const taskData = todos.map((item) => (
    <Paper
      sx={{
        textAlign: "center",
        lineHeight: "60px",
        marginTop: "10px",
        width: "400px",
        background: "#D9A676",
      }}
    >
      <li id={item.id} key={item.id} className={classes.li}>
        {item.name}{" "}
        <Box>
          <Button onClick={onCompleteTaskHandler}>
            <CheckBoxIcon fontSize="medium" />
          </Button>
          <Button>
            <BorderColorIcon fontSize="medium" />
          </Button>
          <Button>
            <DeleteIcon fontSize="medium" />
          </Button>
        </Box>
      </li>
    </Paper>
  ));

  return (
    <>
      <Box className={classes.center}>
        <Box>
          <Box>
            <Typography
              variant="h3"
              component="h1"
              textAlign="center"
              sx={{ mb: "10px" }}
            >
              TO DO LIST
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: "100%",
                height: "100%",
              },
            }}
          >
            <Box noValidate autoComplete="off">
              <form onSubmit={onFormSubmit}>
                <TextField
                  hiddenlabel
                  value={input}
                  onChange={onInputChange}
                  id="filled-basic"
                  label="Add a todo"
                  variant="outlined"
                  sx={{
                    "& > :not(style)": { width: "50ch" },
                    background: "#fff",
                  }}
                />
                <Button
                  type="submit"
                  size="small"
                  sx={{ height: "55px", background: "#D9A676" }}
                  variant="contained"
                >
                  <AddIcon />
                </Button>
              </form>
            </Box>
          </Box>
          <Box className={classes.tasklist}>
            <ul className={classes.ul}>{taskData}</ul>
          </Box>
        </Box>
      </Box>
    </>
  );
}
