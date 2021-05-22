import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";

import "./custom.css";
import Trips from "./components/Trip/Trips";
import CreateTrip from "./components/Trip/CreateTrip";
import UpdateTrip from "./components/Trip/UpdateTrip";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />

        <Route path="/trips" component={Trips} />
        <Route path="/create" component={CreateTrip} />
        <Route path="/update/:id" component={UpdateTrip} />
      </Layout>
    );
  }
}
