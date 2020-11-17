import React from "react";
import "./profile-header.scss";

import Avatar from "../avatar/avatar";

function ProfileHeader(props) {
  return (
    <header className="profile-header">
      <Avatar size="large" />
      <h1 className="profile-header__name">Kyle Lambert</h1>
      <span className="profile-header__handle">@kylelambert</span>
      <div className="profile-header__stats">
        <div className="profile-header__stat">
          <h2 className="profile-header__stat-value">273</h2>
          <h2 className="profile-header__stat-key">Posts</h2>
        </div>
        <div className="profile-header__stat">
          <h2 className="profile-header__stat-value">1386</h2>
          <h2 className="profile-header__stat-key">Friends</h2>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
