import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header";
import HomePage from "../../pages/HomePage";
import ShopPage from "../../pages/ShopPage";
import LoginAndSignUpPage from "../../pages/LoginAndSignUpPage";
import { auth, createUserDocument } from "../../firebase";

class App extends React.Component {
  state = { currentUser: null };
  unsubscribeFirebaseAuth = null;

  componentDidMount() {
    this.unsubscribeFirebaseAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
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
          <Header currentUser={this.state.currentUser} />
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

export default App;
