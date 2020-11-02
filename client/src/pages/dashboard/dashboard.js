import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./home/home";
import Profile from "./profile/profile";
import Post from "./post/post";

function Dashboard(props) {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Home} />
      <Route exact path="/dashboard/profile" component={Profile} />
      <Route exact path="/dashboard/post/:id" component={Post} />
      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}

export default Dashboard;
