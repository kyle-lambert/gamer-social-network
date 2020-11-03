import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./dashboard.scss";

import Home from "../../components/home/home";
import Profile from "../../components/profile/profile";
import Settings from "../../components/settings/settings";
import Post from "../../components/post/post";

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
          <Route exact path="/dashboard/settings" component={Settings} />
          <Route exact path="/dashboard/post/:id" component={Post} />
          <Redirect to="/error" />
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
