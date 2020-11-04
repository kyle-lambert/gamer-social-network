import React from "react";
import "./alert.scss";

import { useAlertContext } from "../../contexts/AlertContext";

function Alert(props) {
  const { alerts } = useAlertContext();

  return (
    <ul className="alert">
      {alerts.map((alert) => {
        return (
          <li
            key={alert.id}
            className="alert__bar"
            data-error={alert.type === "error" ? true : false}
            data-success={alert.type === "success" ? true : false}>
            <span className="alert__msg">{alert.msg}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default Alert;
