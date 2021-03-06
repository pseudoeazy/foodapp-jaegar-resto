import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import useHover from "hooks/useHover";

const styles = {
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

const withHover = (WrappedComponent) => {
  function WithHover(props) {
    const { path, title, isButton, customStyles, handleClick } = props;
    const router = useRouter();
    const pageUrl = router.pathname;
    const { ref, isHover } = useHover(pageUrl === path || title === "Store");

    return isButton ? (
      <button
        ref={ref}
        className={customStyles ? customStyles : styles.input}
        type="button"
        onClick={handleClick}
      >
        <WrappedComponent isHover={isHover} />
      </button>
    ) : (
      <Link href={path}>
        <a
          style={{
            ...(isHover && {
              filter: `drop-shadow(0px 8px 24px rgba(234, 124, 105, 0.32))`,
            }),
          }}
          ref={ref}
          title={title}
          className={`${styles.anchor} ${isHover && "bg-primary"} ${
            isHover && title === "Store" && " opacity-75"
          }`}
        >
          <WrappedComponent isHover={isHover} />
        </a>
      </Link>
    );
  }

  WithHover.propTypes = {
    isButton: PropTypes.bool,
    path: PropTypes.string,
    title: PropTypes.string,
    handleClick: PropTypes.func,
  };
  WithHover.defaultProps = {
    isButton: false,
    path: "/#",
    title: "",
    handleClick: () => null,
  };
  return WithHover;
};
export default withHover;
