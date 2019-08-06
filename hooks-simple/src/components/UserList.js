import React from "react";

const UserList = ({ resource }) => {
  const users = resource.map(user => <li key={user.id}>{user.name}</li>);
  return <ul>{users}</ul>;
};

export default UserList;
