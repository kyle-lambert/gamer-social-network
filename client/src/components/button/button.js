import React from "react";
import "./button.scss";

function Button({ children, secondary, ...rest }) {
  return (
    <button
      {...rest}
      data-secondary={secondary ? true : false}
      className="button">
      <span>{children}</span>
    </button>
  );
}

export default Button;
