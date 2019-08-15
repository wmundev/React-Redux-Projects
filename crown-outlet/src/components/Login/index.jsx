import React from "react";
import "./Login.scss";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";

class Login extends React.Component {
  state = { email: "", password: "" };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  onInputChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login">
        <div className="title">
          <h2>I already have an account</h2>
          <span>Login with your email and password</span>
        </div>
        <form onSubmit={this.onSubmit}>
          <FormInput
            onChange={this.onInputChange}
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
          />
          <FormInput
            onChange={this.onInputChange}
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
          />
          <CustomButton content="Login" type="submit">
            Login
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default Login;
