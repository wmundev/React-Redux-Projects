import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, googleSignIn, inverted, ...otherProps }) => {
  const googleClass = googleSignIn ? "google-btn" : "";
  const invertedClass = inverted ? "inverted" : "";
  return (
    <button className={`custom-button ${googleClass} ${invertedClass}`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
