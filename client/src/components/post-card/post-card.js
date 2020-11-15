import React from "react";
import "./post-card.scss";

import PostAuthor from "../../components/post-author/post-author";
import PostContent from "../../components/post-content/post-content";
import PostDropdown from "../../components/post-dropdown/post-dropdown";
import PostEngagement from "../../components/post-engagement/post-engagement";

function PostCard(props) {
  return (
    <article className="post-card">
      <PostAuthor />
      <PostDropdown />
      <PostContent />
      <PostEngagement />
    </article>
  );
}

export default PostCard;
