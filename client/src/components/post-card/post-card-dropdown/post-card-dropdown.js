import React from "react";
import "./post-card-dropdown.scss";

import CubeIcon from "../../cube-icon/cube-icon";

function PostDropdown(props) {
  return (
    <div className="post-card-dropdown">
      <button className="post-card-dropdown__btn">
        <CubeIcon name="moreDots" />
      </button>
    </div>
  );
}

export default PostDropdown;
