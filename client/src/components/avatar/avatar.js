import React from "react";
import "./avatar.scss";
import { getNameInitials } from "../../utils/helpers";

import picture from "../../assets/images/pride-person.jpg";

function Avatar({ firstName, lastName, image, size }) {
  return (
    <div data-size={size} className="avatar">
      <img src={picture} alt="" className="avatar__img" />
      {/* {image ? (
        <img src={image} alt="" className="avatar__img" />
      ) : (
        <span className="avatar__placeholder">
          {getNameInitials("Kyle", "Lambert")}
        </span>
      )} */}
    </div>
  );
}

export default Avatar;
