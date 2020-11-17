import React from "react";
import "./user-info-group.scss";

function UserInfoGroup({ avatar, name, createdAt }) {
  return (
    <div className="user-info-group">
      <div className="user-info-group__avatar">
        <img
          src={avatar}
          alt="User Avatar"
          className="user-info-group__image"
        />
      </div>
      <div className="user-info-group__info">
        <span className="user-info-group__name">{name}</span>
        <span className="user-info-group__created-at">{createdAt}</span>
      </div>
    </div>
  );
}

export default UserInfoGroup;
