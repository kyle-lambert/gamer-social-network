import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// import Authentication from "../../pages/authentication/authentication";
// import Register from "../../pages/register/register";
// import Login from "../../pages/login/login";
// import Error from "../../pages/error/error";
import Home from "../../pages/home/home";
import SinglePost from "../../pages/single-post/single-post";
import Profile from "../../pages/profile/profile";
import Friends from "../../pages/friends/friends";
import UserProfile from "../../pages/user-profile/user-profile";

// import Alert from "../alert/alert";
import PrivateRoute from "../../hoc/private-route";

function App(props) {
  return (
    <div className="app">
      {/* <Alert /> */}
      <Switch>
        {/* <Route exact path="/" component={Authentication} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/error" component={Error} /> */}
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/posts/:id" component={SinglePost} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/profile/:id" component={UserProfile} />
        <PrivateRoute exact path="/friends" component={Friends} />
        {/* <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/post/:id" component={Post} />
        <PrivateRoute exact path="/profile/me" component={Profile} />
        <PrivateRoute exact path="/profile/:id" component={UserProfile} />
        <PrivateRoute exact path="/settings" component={Settings} /> */}
        <Route>
          <Redirect to="/error" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
