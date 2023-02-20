import React from "react";

const User = ({ user }) => {
  return (
    <div id={user.id}>
      <h4>Name: {user.name}</h4>
      <p>Gender: {user.gender}</p>
      <p>Height: {user.height}</p>
      <p>Eye Color: {user.height}</p>
      <hr />
    </div>
  );
};

export default User;
