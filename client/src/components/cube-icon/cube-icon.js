import React from "react";
import "./cube-icon.scss";

import SVGIcon from "../../components/svg-icon/svg-icon";

function CubeIcon({ name, fillColor = "grey", cubeColor = "grey" }) {
  return (
    <div data-size="small" data-cube-color={cubeColor} className="cube-icon">
      <SVGIcon name={name} size="small" fillColor={fillColor} />
    </div>
  );
}

export default CubeIcon;
