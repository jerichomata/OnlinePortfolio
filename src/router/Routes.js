import React from "react";
import LandingPage from "../components/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
