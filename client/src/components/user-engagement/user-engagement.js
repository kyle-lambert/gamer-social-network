import React from "react";
import "./user-engagement.scss";

import CubeIcon from "../../components/cube-icon/cube-icon";

function UserEngagement(props) {
  return (
    <div className="user-engagement">
      <div className="user-engagement__group">
        <CubeIcon name="favoriteBorder" />
        <span className="user-engagement__num">326</span>
      </div>
      <div className="user-engagement__group">
        <CubeIcon name="comment" />
        <span className="user-engagement__num">17</span>
      </div>
    </div>
  );
}

export default UserEngagement;
