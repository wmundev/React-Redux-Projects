import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header";
import HomePage from "../../pages/HomePage";
import ShopPage from "../../pages/ShopPage";
import LoginAndSignUpPage from "../../pages/LoginAndSignUpPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/loginsignup" component={LoginAndSignUpPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
