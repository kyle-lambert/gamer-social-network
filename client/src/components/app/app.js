import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Authentication from "../../pages/authentication/authentication";
import Register from "../../pages/register/register";
import Login from "../../pages/login/login";
import Error from "../../pages/error/error";
import Home from "../../pages/home/home";
import Post from "../../pages/post/post";
import Profile from "../../pages/profile/profile";
import UserProfile from "../../pages/user-profile/user-profile";
import Settings from "../../pages/settings/settings";

import Alert from "../alert/alert";
import PrivateRoute from "../../hoc/private-route";

function App(props) {
  return (
    <div className="app">
      <Alert />
      <Switch>
        <Route exact path="/" component={Authentication} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/error" component={Error} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/post/:id" component={Post} />
        <PrivateRoute exact path="/profile/me" component={Profile} />
        <PrivateRoute exact path="/profile/:id" component={UserProfile} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <Route>
          <Redirect to="/error" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
