import PropTypes from "prop-types";
import useHover from "hooks/useHover";

const styles = {
  button: `
      relative
      text-sm
      font-semibold
      hover:text-primary
      transition
      duration-500
      ease-in-out
      before:transform
      before:block 
      before:absolute 
      before:content-[' '] 
      before:-bottom-3.5 
      before:left
      before:w-1/2
      before:transition
      before:duration-500
      before:ease-in-out
      before:transform
      `,
};

const DishMenuButton = ({ label, value }) => {
  const { ref, isHover } = useHover();
  return (
    <button
      ref={ref}
      value={value}
      type="button"
      className={` ${styles.button}
         ${isHover ? " before:border-b-2 before:border-primary" : ""}`}
    >
      {label}
    </button>
  );
};

DishMenuButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default DishMenuButton;
