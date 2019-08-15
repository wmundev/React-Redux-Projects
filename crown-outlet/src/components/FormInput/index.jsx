import React from "react";
import "./FormInput.scss";

const FormInput = ({ label, ...otherProps }) => {
  const renderLabel = () => {
    return label ? <label className="form-input-label">{label}</label> : null;
  };

  return (
    <div className="group">
      <input
        type="text"
        className={`${otherProps.value.lengh ? "shrink" : ""} form-input`}
        {...otherProps}
      />
      {renderLabel()}
    </div>
  );
};

export default FormInput;
