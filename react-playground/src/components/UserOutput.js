import React from "react";
import "../style/style.css";

const UserOutput = ({username}) => {
  return (
    <div className="user-info">
      <p>Name: {username}</p>
      <p>A web developer</p>
    </div>
  );
}

export default UserOutput;