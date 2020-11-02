import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./dashboard.scss";

import Home from "./home/home";
import Profile from "./profile/profile";
import Post from "./post/post";

import Navbar from "../../components/navbar/navbar";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <div className="dashboard-navbar">
        <Navbar />
      </div>
      <div className="dashboard-page">
        <Switch>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/dashboard/profile" component={Profile} />
          <Route exact path="/dashboard/post/:id" component={Post} />
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
