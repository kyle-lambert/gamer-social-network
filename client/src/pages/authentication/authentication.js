import React from "react";
import { Redirect } from "react-router-dom";

function Authentication(props) {
  return <Redirect to="/login" />;
}

export default Authentication;
