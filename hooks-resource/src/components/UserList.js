import React from "react";
import useResource from "./useResources";

const UserList = () => {
  const users = useResource("users");
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
