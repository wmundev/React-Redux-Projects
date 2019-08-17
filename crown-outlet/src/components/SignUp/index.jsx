import React from "react";
import "./SignUp.scss";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";

class SignUp extends React.Component {
  render() {
    return (
      <div className="sign-up">
        <div className="title">
          <h2>I do not have an account</h2>
          <span>Sign up with your email and password</span>
        </div>
      </div>
    );
  }
}

export default SignUp;
