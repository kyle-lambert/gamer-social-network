import React from "react";
import { Link } from "react-router-dom";
import "./landing-layout.scss";

import GameConsole from "../../assets/images/game-console.jpg";

function LandingLayout({ login, register, children }) {
  return (
    <div className="landing-layout">
      <div className="landing-layout__picture">
        <img
          src={GameConsole}
          alt="Game Console"
          className="landing-layout__img"
        />
        <LandingCTA toRegister />
      </div>
      <div className="landing-layout__panel">{children}</div>
    </div>
  );
}

function LandingCTA({ toRegister, toLogin }) {
  return (
    <div className="landing-cta">
      <h1 className="landing-cta__heading">Hello Gamer!</h1>
      <p className="landing-cta__copy">
        {toRegister ? "Don't have an account yet?" : "Already have an account?"}
      </p>
      <Link
        to={toRegister ? "/register" : "/login"}
        className="landing-cta__link">
        <span>{toRegister ? "Create an Account" : "Login"}</span>
      </Link>
    </div>
  );
}

export default LandingLayout;
