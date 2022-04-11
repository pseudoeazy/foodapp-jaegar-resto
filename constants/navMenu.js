import {
  Store,
  Home,
  Recipes,
  Report,
  Contact,
  Notify,
  Settings,
  Logout,
} from "components/icons/";

const navMenu = [
  {
    title: "Store",
    path: "/#",
    icon: Store,
  },
  {
    title: "Home",
    path: "/",
    icon: Home,
  },
  {
    title: "Recipes",
    path: "/#",
    icon: Recipes,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: Report,
  },
  {
    title: "Contact",
    path: "/#",
    icon: Contact,
  },
  {
    title: "Notify",
    path: "/#",
    icon: Notify,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    title: "Logout",
    path: "/#",
    icon: Logout,
  },
];

export default navMenu;
