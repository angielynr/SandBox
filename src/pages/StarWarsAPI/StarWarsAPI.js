import React, { useState } from "react";
import UsersList from "../StarWarsAPI/UsersList";

import { Button } from "@mui/material";

const StarWarsAPI = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();

    const transformedPeople = data.results.map((result) => {
      return {
        id: result.name,
        name: result.name,
        eyeColor: result.eye_color,
        gender: result.gender,
        height: result.height,
      };
    });
    setUsers(transformedPeople);
    setIsLoading(false);
  };

  return (
    <div>
      <Button onClick={fetchMoviesHandler} variant="contained">
        Fetch Users
      </Button>
      {!isLoading && <UsersList users={users} />}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};
export default StarWarsAPI;
