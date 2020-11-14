import { v4 as uuidv4 } from "uuid";

const routes = [
  { id: uuidv4(), name: "Home", path: "/home", iconName: "home" },
  {
    id: uuidv4(),
    name: "Profile",
    path: "/profile/me",
    iconName: "personOutline",
  },
  {
    id: uuidv4(),
    name: "Settings",
    path: "/settings",
    iconName: "settings",
  },
];

export default routes;
