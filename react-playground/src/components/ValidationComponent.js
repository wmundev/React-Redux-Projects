import React from "react";

const ValidationComponent = ({ length }) => {
  const validateMsg =
    length >= 5 ? <p>Text long enough</p> : <p>Text too short</p>;
  return <div>{validateMsg}</div>;
};

export default ValidationComponent;
