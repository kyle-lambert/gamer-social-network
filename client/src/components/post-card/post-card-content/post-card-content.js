import React from "react";
import "./post-card-content.scss";

import landscape from "../../../assets/images/landscape.jpg";

function PostCardContent({ image, post }) {
  return (
    <div className="post-card-content">
      <p className="post-card-content__text">{post}</p>
      <img src={image} alt="Post Image" className="post-card-content__image" />
    </div>
  );
}

export default PostCardContent;
