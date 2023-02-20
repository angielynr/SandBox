import { Button } from "@mui/material";
import React from "react";

const Project = () => {
  return (
    <div>
      <a
        style={{ textDecoration: "none" }}
        href="https://angielynr.github.io/LoginPage/"
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="contained" sx={{ mb: "15px" }}>
          Go To ReactJS Project Compilation
        </Button>
      </a>
      <iframe
        title="project"
        width="100%"
        height={800}
        src="https://angielynr.github.io/LoginPage/"
      ></iframe>
    </div>
  );
};

export default Project;
