import {
  Store,
  Home,
  Recipes,
  Report,
  Contact,
  Notify,
  Settings,
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
];

export default navMenu;
