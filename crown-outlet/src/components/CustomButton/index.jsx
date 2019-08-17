import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, googleSignIn, ...otherProps }) => {
  const googleClass = googleSignIn ? "google-btn" : "";
  return (
    <button className={`custom-button ${googleClass}`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
