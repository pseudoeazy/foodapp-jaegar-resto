import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import { BiUserCircle } from "react-icons/bi";
import { Logout } from "components/icons";
import useHover from "hooks/useHover";
import { signOutUser } from "services/auth";

const styles = {
  li: `w-[5.75rem] 
  h-[6.375rem] 
  flex justify-center 
  items-center 
  py-[1.4375rem]
   pr-6 pl-3 
   snap-center`,
  anchor: `
    w-14 h-14 
    flex justify-center 
    items-center 
    rounded-lg 
    drop-shadow-lg transition
    duration-200
    ease-in-out
    transform `,
  input: `
    w-12 h-12 
    flex items-center 
    justify-center
     rounded-lg 
     border border-primary 
     hover:border-accents-200
     `,
};

const AuthMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [session] = useSession();
  const { ref, isHover } = useHover();

  const handleClick = () => {
    if (session) {
      signOutUser(); // firebase signout
      signOut({ callbackUrl: `/` }); // next-auth sign out
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setIsLoggedIn(session);
    }
    return () => {
      isMounted = false;
    };
  }, [session]);

  return (
    <li className={`${styles.li}`}>
      <Link href={`${isLoggedIn ? "/#" : "/login"}`}>
        <a
          style={{
            ...(isHover && {
              filter: `drop-shadow(0px 8px 24px rgba(234, 124, 105, 0.32))`,
            }),
          }}
          ref={ref}
          title={`${isLoggedIn ? " logout " : " sign in "}`}
          className={`${styles.anchor} ${isHover && "bg-primary"} ${isHover}`}
          onClick={handleClick}
        >
          {isLoggedIn ? (
            <Logout isHover={isHover} />
          ) : (
            <span className="bg-primary">
              <BiUserCircle />
            </span>
          )}
        </a>
      </Link>
    </li>
  );
};

export default AuthMenu;
