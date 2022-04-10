import PropTypes from "prop-types";
import useHover from "hooks/useHover";

const Button = ({ component: Component, styles }) => {
  const { ref, isHover } = useHover();

  return (
    <button ref={ref} type="button" className={styles}>
      <Component isHover={isHover} />
    </button>
  );
};

Button.propTypes = {
  styles: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};
export default Button;
