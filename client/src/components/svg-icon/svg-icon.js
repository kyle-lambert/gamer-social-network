import "./svg-icon.scss";

import { ReactComponent as ArrowDown } from "../../assets/icons/arrow_down.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow_left.svg";
import { ReactComponent as CheckCircle } from "../../assets/icons/check_circle.svg";
import { ReactComponent as Done } from "../../assets/icons/done.svg";
import { ReactComponent as ErrorOutline } from "../../assets/icons/error_outline.svg";
import { ReactComponent as HeartOutline } from "../../assets/icons/heart_outline.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { ReactComponent as Person } from "../../assets/icons/person.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as MoreDots } from "../../assets/icons/more_dots.svg";
import { ReactComponent as CommentOutline } from "../../assets/icons/comment_outline.svg";
import { ReactComponent as Friends } from "../../assets/icons/friends.svg";

const icons = {
  arrowDown: <ArrowDown />,
  arrowLeft: <ArrowLeft />,
  checkCircle: <CheckCircle />,
  done: <Done />,
  errorOutline: <ErrorOutline />,
  heartOutline: <HeartOutline />,
  heart: <Heart />,
  home: <Home />,
  person: <Person />,
  search: <Search />,
  settings: <Settings />,
  moreDots: <MoreDots />,
  commentOutline: <CommentOutline />,
  friends: <Friends />,
};

function SVGIcon({ name, size = "medium", fillColor = "white" }) {
  return (
    <div data-size={size} data-fill-color={fillColor} className="svg-icon">
      {icons[name]}
    </div>
  );
}

export default SVGIcon;
