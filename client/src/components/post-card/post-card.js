import React from "react";
import "./post-card.scss";

import UserInfoGroup from "../user-info-group/user-info-group";
import UserEngagement from "../user-engagement/user-engagement";
import PostDropdown from "./post-card-dropdown/post-card-dropdown";
import PostContent from "./post-card-content/post-card-content";

function PostCard(props) {
  return (
    <article className="post-card">
      <div className="post-card__user">
        <UserInfoGroup />
      </div>
      <PostDropdown />
      <PostContent />
      <div className="post-card__engagement">
        <UserEngagement />
      </div>
    </article>
  );
}

export default PostCard;
