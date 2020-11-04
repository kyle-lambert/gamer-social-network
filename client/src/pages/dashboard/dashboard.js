import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import "./dashboard.scss";

import Home from "../../components/home/home";
import Profile from "../../components/profile/profile";
import Settings from "../../components/settings/settings";
import Post from "../../components/post/post";

import Navbar from "../../components/navbar/navbar";

import { useAuthContext } from "../../contexts/AuthContext";

function Dashboard(props) {
  const history = useHistory();
  const { state, logoutUser } = useAuthContext();

  React.useEffect(() => {
    if (!state.user) {
      history.push("/login");
    }
  }, [state.user, history]);

  React.useEffect(() => {
    return () => {
      logoutUser();
    };
  }, [logoutUser]);

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
