import React from "react";
import User from "./User";

const UsersList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
};

export default UsersList;
