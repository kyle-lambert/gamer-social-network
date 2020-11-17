import React from "react";
import "./profile.scss";

import Dashboard from "../../layout/dashboard/dashboard";
import ProfileHeader from "../../components/profile-header/profile-header";

function Profile(props) {
  return (
    <Dashboard>
      <div className="profile">
        <ProfileHeader />
        <div className="profile__info"></div>
      </div>
    </Dashboard>
  );
}

export default Profile;
