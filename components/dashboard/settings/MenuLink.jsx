import Link from "next/link";
import { useRouter } from "next/router";
import useHover from "hooks/useHover";

const styles = {
  li: `
  first:rounded-t-lg
  last:rounded-b-lg
  h-[5.4375rem]
  py-6
  pl-6
  cursor-pointer
    `,
  button: `
  h-[2.4375rem]
  flex`,
};

/**
 * TODO
 * fix submenu hover state glitches
 */

const MenuLink = ({ label, description, path, icons: Icon }) => {
  const router = useRouter();
  const pageUrl = router.pathname;
  const { ref, isHover } = useHover(pageUrl === path);

  return (
    <li
      ref={ref}
      className={`${styles.li}`}
      style={{
        ...(isHover && {
          backgroundColor: `rgba(234, 124, 105, 0.26)
          `,
        }),
      }}
    >
      <Link href={path} passHref>
        <button className={`${styles.button}`}>
          <div className="mr-2 ">
            <Icon isHover={isHover} isSettings />
          </div>
          <div className="flex flex-col ">
            <span
              className={`text-left   font-medium text-sm ${
                isHover ? "text-primary" : "text-white"
              }`}
            >
              {label}
            </span>
            <span className="font-normal text-xs text-textbg-300">
              {description}
            </span>
          </div>
        </button>
      </Link>
    </li>
  );
};

export default MenuLink;
