import settingsMenu from "constants/settingsMenu";
import MenuLink from "./MenuLink";

const SubMenu = () => {
  return (
    <nav className="w-[17.1875rem]">
      <ul className="mt-6 rounded-lg bg-basebg-400">
        {settingsMenu.map((menu, idx) => (
          <MenuLink key={idx} {...menu} />
        ))}
      </ul>
    </nav>
  );
};

export default SubMenu;
