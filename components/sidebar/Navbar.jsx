import { useRouter } from "next/router";
import withHover from "@hoc/withHover";
import AuthMenu from "./AuthNav";
import navMenu from "constants/navMenu";
import styles from "./Navbar.module.css";

const classes = {
  li: `w-[5.75rem] h-[6.375rem] flex justify-center items-center py-[1.4375rem] pr-6 pl-3 snap-center`,
};

const Navbar = () => {
  const router = useRouter();
  const pageUrl = router.pathname;

  return (
    <div className="w-[6.5rem]">
      <nav
        className={`fixed z-10 w-[6.5rem] h-screen bg-basebg-400 overflow-x-hidden overflow-y-scroll ${styles.scrollbar}`}
      >
        <div className="pl-3">
          <ul className="flex flex-col snap-y">
            {navMenu.map(({ path, title, icon: Icon }, idx) => {
              const HoverComponent = withHover(Icon);
              return (
                <li
                  key={idx}
                  className={`${classes.li} ${
                    pageUrl === path &&
                    "bg-basebg-300 rounded-tl-xl rounded-bl-xl"
                  }`}
                >
                  <HoverComponent path={path} title={title} />
                </li>
              );
            })}
            <AuthMenu />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
