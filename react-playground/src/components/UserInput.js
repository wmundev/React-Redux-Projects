import React from "react";
import "../style/style.css";


const UserInput = ({onNameChange, username}) => {
  return (
    <div className="input-div">
      <input type="text" onChange={onNameChange} value={username} className="user-input"/>
    </div>
  );
};

export default UserInput;