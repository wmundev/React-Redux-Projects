import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import "./App.css";

const HatPage = () => {
  return <div>Hat Page</div>;
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop/hats" component={HatPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
