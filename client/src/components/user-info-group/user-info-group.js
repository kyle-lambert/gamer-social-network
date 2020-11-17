import React from "react";
import "./user-info-group.scss";

import portrait from "../../assets/images/face-portrait.jpg";

function UserInfoGroup(props) {
  return (
    <div className="user-info-group">
      <div className="user-info-group__avatar">
        <img
          src={portrait}
          alt="User Avatar"
          className="user-info-group__image"
        />
      </div>
      <div className="user-info-group__info">
        <span className="user-info-group__name">Kyle Lambert</span>
        <span className="user-info-group__created-at">16th December 2020</span>
      </div>
    </div>
  );
}

export default UserInfoGroup;
