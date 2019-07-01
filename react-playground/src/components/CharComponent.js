import React from "react";
import "../style/char.css";

const CharComponent = ({ letter, clicked }) => {
  return (
    <div className="char" onClick={clicked}>
      <p>{letter}</p>
    </div>
  );
};

export default CharComponent;
