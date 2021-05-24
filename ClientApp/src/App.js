import React, { useEffect } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";

import "./custom.css";
import Trips from "./components/Trip/Trips";
import CreateTrip from "./components/Trip/CreateTrip";
import UpdateTrip from "./components/Trip/UpdateTrip";
import Delete from "./components/Trip/Delete";
import { getAllTrips } from "./Redux";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTrips());
  });
  return (
    <Layout>
      <Route exact path="/" component={Home} />

      <Route path="/trips" component={Trips} />
      <Route path="/create" component={CreateTrip} />
      <Route path="/update/:id" component={UpdateTrip} />
      <Route path="/delete/:id" component={Delete} />
    </Layout>
  );
}
