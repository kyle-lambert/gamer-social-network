import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import Authentication from "../../pages/authentication/authentication";
import Register from "../../pages/register/register";
import Login from "../../pages/login/login";
import Dashboard from "../../pages/dashboard/dashboard";
import Error from "../../pages/error/error";

import Alert from "../alert/alert";
import PrivateRoute from "../../hoc/private-route";

import { useAuthContext } from "../../contexts/AuthContext";

function App(props) {
  const history = useHistory();
  const { state } = useAuthContext();

  React.useEffect(() => {
    if (state.user) {
      history.push("/dashboard");
    }
  }, [state.user, history]);

  return (
    <>
      <Alert />
      <Switch>
        <Route exact path="/" component={Authentication} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/error" component={Error} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
}

export default App;
