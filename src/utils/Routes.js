import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../components/landing/Landing";
import Navbar from "../components/nav/Navbar";

export default function Routes() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </>
  );
}
