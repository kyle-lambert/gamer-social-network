import React from "react";
import "./post-engagement.scss";

import CubeIcon from "../../components/cube-icon/cube-icon";

function PostEngagement(props) {
  return (
    <div className="post-engagement">
      <div className="post-engagement__group">
        <CubeIcon name="favoriteBorder" />
        <span className="post-engagement__num">326</span>
      </div>
      <div className="post-engagement__group">
        <CubeIcon name="comment" />
        <span className="post-engagement__num">17</span>
      </div>
    </div>
  );
}

export default PostEngagement;
