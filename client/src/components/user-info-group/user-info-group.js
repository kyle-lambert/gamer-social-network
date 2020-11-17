import React from "react";
import "./user-info-group.scss";

import Avatar from "../avatar/avatar";

function UserInfoGroup({ avatar, name, createdAt }) {
  return (
    <div className="user-info-group">
      <div className="user-info-group__avatar">
        <Avatar />
      </div>
      <div className="user-info-group__info">
        <span className="user-info-group__name">
          {name ? name : "No author"}
        </span>
        <span className="user-info-group__created-at">
          {createdAt ? createdAt : "No date"}
        </span>
      </div>
    </div>
  );
}

export default UserInfoGroup;
