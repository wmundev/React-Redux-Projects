import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          client_id:
            "1045521031620-l4vhftmksb5lbibues8csf464k0q1j97.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.authInstance = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.authInstance.isSignedIn.get());
          this.authInstance.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.authInstance.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.authInstance.signIn();
  }

  onSignOutClick = () => {
    this.authInstance.signOut();
  }

  renderSignButton() {
    if (this.props.signState === null) {
      return null;
    } else if (this.props.signState) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderSignButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    signState: state.auth.isSignedIn,
    userId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
