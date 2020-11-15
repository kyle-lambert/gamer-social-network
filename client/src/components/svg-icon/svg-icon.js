import "./svg-icon.scss";

import { ReactComponent as ArrowDown } from "../../assets/icons/arrow_down.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow_left.svg";
import { ReactComponent as CheckCircle } from "../../assets/icons/check_circle.svg";
import { ReactComponent as Done } from "../../assets/icons/done.svg";
import { ReactComponent as ErrorOutline } from "../../assets/icons/error_outline.svg";
import { ReactComponent as FavoriteBorder } from "../../assets/icons/favorite_border.svg";
import { ReactComponent as Favorite } from "../../assets/icons/favorite.svg";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { ReactComponent as PersonAdd } from "../../assets/icons/person_add.svg";
import { ReactComponent as PersonOutline } from "../../assets/icons/person_outline.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as MoreDots } from "../../assets/icons/more_dots.svg";
import { ReactComponent as Comment } from "../../assets/icons/comment.svg";

const icons = {
  arrowDown: <ArrowDown />,
  arrowLeft: <ArrowLeft />,
  checkCircle: <CheckCircle />,
  done: <Done />,
  errorOutline: <ErrorOutline />,
  favoriteBorder: <FavoriteBorder />,
  favorite: <Favorite />,
  home: <Home />,
  personAdd: <PersonAdd />,
  personOutline: <PersonOutline />,
  search: <Search />,
  settings: <Settings />,
  moreDots: <MoreDots />,
  comment: <Comment />,
};

function SVGIcon({ name, size = "medium", fillColor = "white" }) {
  return (
    <div data-size={size} data-fill-color={fillColor} className="svg-icon">
      {icons[name]}
    </div>
  );
}

export default SVGIcon;
