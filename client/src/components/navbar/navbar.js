import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

import Icon from "../icon/icon";
import routes from "../../utils/routes";

function Navbar(props) {
  return (
    <div className="navbar">
      <nav className="navbar__nav">
        {routes.map((route) => {
          return (
            <NavLink
              key={route.id}
              exact
              to={route.path}
              className="navbar__link"
              activeClassName="navbar__selected">
              <Icon iconName={route.iconName} />
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
