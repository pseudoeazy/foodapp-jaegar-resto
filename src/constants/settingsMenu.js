import {
  Heart,
  Restaurant,
  Recipes,
  Notify,
  InfoCircle,
} from "components/icons";

const settingsMenu = [
  {
    label: "Appereance",
    description: "Dark and Light mode, Font size",
    path: "/settings/#",
    icons: Heart,
  },
  {
    label: "Your Restaurant",
    description: "Dark and Light mode, Font size",
    path: "/settings/#",
    icons: Restaurant,
  },
  {
    label: "Products Management",
    description: "Manage your product, pricing, etc",
    path: "/settings",
    icons: Recipes,
  },
  {
    label: "Notifications",
    description: "Customize your notifications",
    path: "/settings/#",
    icons: Notify,
  },
  {
    label: "About Us",
    description: "Find out more about Posly",
    path: "/settings/#",
    icons: InfoCircle,
  },
];

export default settingsMenu;
