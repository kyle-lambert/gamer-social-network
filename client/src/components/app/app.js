import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "../../pages/landing/landing";
import Register from "../../pages/register/register";
import Login from "../../pages/login/login";

function App(props) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
