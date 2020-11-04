import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const [isAuthorised, setIsAuthorised] = React.useState(true);
  return (
    <Route {...rest}>
      {isAuthorised ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
}

export default PrivateRoute;
