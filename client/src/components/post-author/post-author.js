import React from "react";
import "./post-author.scss";

import portrait from "../../assets/images/face-portrait.jpg";

function PostAuthor(props) {
  return (
    <div className="post-author">
      <div className="post-author__avatar">
        <img src={portrait} alt="User Avatar" className="post-author__image" />
      </div>
      <span className="post-author__name">Kyle Lambert</span>
      <span className="post-author__created-at">16th December 2020</span>
    </div>
  );
}

export default PostAuthor;
