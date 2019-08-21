import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Header from "../Header";
import HomePage from "../../pages/HomePage";
import ShopPage from "../../pages/ShopPage";
import LoginAndSignUpPage from "../../pages/LoginAndSignUpPage";
import { auth, createUserDocument } from "../../firebase";
import { setCurrentUser } from "../../redux/user/userActions";

class App extends React.Component {
  unsubscribeFirebaseAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFirebaseAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFirebaseAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header currentUser={this.props.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/loginsignup" component={LoginAndSignUpPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
