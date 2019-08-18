import React from "react";
import "./SignUp.scss";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { auth, createUserDocument } from "../../firebase";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  onFormSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Warning: password and confirm password are not the same!");
      return;
    }
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(userCredential.user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      alert(error.message);
    }
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <div className="title">
          <h2>I do not have an account</h2>
          <span>Sign up with your email and password</span>
        </div>
        <form onSubmit={this.onFormSubmit}>
          <FormInput
            onChange={this.onInputChange}
            type="text"
            name="displayName"
            label="Display Name"
            value={this.state.displayName}
          />
          <FormInput
            onChange={this.onInputChange}
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
          />
          <FormInput
            onChange={this.onInputChange}
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
          />
          <FormInput
            onChange={this.onInputChange}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={this.state.confirmPassword}
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
