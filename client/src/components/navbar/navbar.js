import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

import Icon from "../icon/icon";

function Navbar(props) {
  return (
    <div className="navbar">
      <nav className="navbar__nav">
        {routes.map((route) => {
          return (
            <NavLink
              key={route.id}
              to={route.path}
              className="navbar__link"
              activeClassName="selected">
              <Icon iconName={route.iconName} />
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}

const routes = [
  { id: 1, name: "Home", path: "/dashboard", iconName: "home" },
  {
    id: 2,
    name: "Profile",
    path: "/dashboard/profile",
    iconName: "personOutline",
  },
  {
    id: 3,
    name: "Settings",
    path: "/dashboard/settings",
    iconName: "settings",
  },
];

export default Navbar;
