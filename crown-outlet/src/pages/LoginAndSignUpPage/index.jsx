import React from "react";
import "./LoginAndSignUpPage.scss";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";

const LoginAndSignUpPage = () => {
  return (
    <div className="login-and-sign-up">
      <Login />
      <SignUp />
    </div>
  );
};

export default LoginAndSignUpPage;
