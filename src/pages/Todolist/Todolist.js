import Input from "./Input";
// import { Box } from "@mui/material";

const Todolist = (props) => {
  const todoData = [
    {
      id: 1,
      name: "eat",
    },
    {
      id: 2,
      name: "sleep",
    },
  ];

  return (
    <>
      <Input tasks={todoData} />
    </>
  );
};

export default Todolist;
