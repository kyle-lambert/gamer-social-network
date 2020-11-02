import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Landing from "../../pages/landing/landing";
import Register from "../../pages/register/register";
import Login from "../../pages/login/login";
import Dashboard from "../../pages/dashboard/dashboard";
import Error from "../../pages/error/error";

import PrivateRoute from "../../hoc/private-route/private-route";

function App(props) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/404" component={Error} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
