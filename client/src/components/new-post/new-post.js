import React from "react";
import "./new-post.scss";

import CubeIcon from "../../components/cube-icon/cube-icon";

function NewPost(props) {
  return (
    <div className="new-post">
      <form action="" className="new-post__form">
        <div className="new-post__avatar">
          <CubeIcon
            name="personOutline"
            fillColor="white"
            cubeColor="secondary"
          />
        </div>
        <textarea
          rows="6"
          placeholder="What are you thinking?"
          className="new-post__textarea"></textarea>
        <div className="new-post__dropdown">
          <CubeIcon name="settings" />
        </div>
        <div className="new-post__upload">
          <input type="file" className="new-post__input" />
        </div>
        <div className="new-post__submit">
          <button className="new-post__btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
