import React from "react";
import "./landing-layout.scss";

import GameConsole from "../../assets/images/game-console.jpg";

function LandingLayout({ children }) {
  return (
    <div className="landing-layout">
      <div className="landing-layout__picture">
        <img
          src={GameConsole}
          alt="Game Console"
          className="landing-layout__img"
        />
      </div>
      <div className="landing-layout__panel">{children}</div>
    </div>
  );
}

export default LandingLayout;
