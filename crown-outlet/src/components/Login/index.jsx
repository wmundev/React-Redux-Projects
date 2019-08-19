import React from "react";
import "./Login.scss";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { auth, signInWithGoogle } from "../../firebase";

class Login extends React.Component {
  state = { email: "", password: "" };

  onSubmit = async e => {
    e.preventDefault();
    try {
      const { email, password } = this.state;
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    } finally {
      this.setState({ email: "", password: "" });
    }
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
          <div className="buttons">
            <CustomButton type="submit">Login</CustomButton>
            <CustomButton onClick={signInWithGoogle} googleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
