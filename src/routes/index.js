import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import AddCampaign from "../pages/AddCampaign";
import Campaigns from "../pages/Campaigns";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Campaigns} exact />
          <Route path="/addCampaign" component={AddCampaign} exact />
        </Switch>
      </Router>
    );
  }
}
