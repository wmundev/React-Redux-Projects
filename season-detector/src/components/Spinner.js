import React from "react";

const Spinner = ({ msg }) => {
  return (
    <div className="ui container">
      <div className="ui active dimmer">
        <div className="ui text loader">{msg}</div>
      </div>
      <p></p>
    </div>
  );
};

Spinner.defaultProps = {
  msg: "Loading..."
};

export default Spinner;
