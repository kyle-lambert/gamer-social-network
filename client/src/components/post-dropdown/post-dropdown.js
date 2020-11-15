import React from "react";
import "./post-dropdown.scss";

import CubeIcon from "../../components/cube-icon/cube-icon";

function PostDropdown(props) {
  return (
    <div className="post-dropdown">
      <button className="post-dropdown__btn">
        <CubeIcon name="moreDots" />
      </button>
    </div>
  );
}

export default PostDropdown;
