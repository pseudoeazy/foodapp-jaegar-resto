import PropTypes from "prop-types";
import useHover from "hooks/useHover";
import { useApp } from "context/AppContext";

const Button = ({ component: Component, styles }) => {
  const { setAppSettings } = useApp();
  const { ref, isHover } = useHover();

  return (
    <button
      ref={ref}
      type="button"
      className={styles}
      onClick={() =>
        setAppSettings({
          type: "CONTIUE_TO_PAYMENT",
        })
      }
    >
      <Component isHover={isHover} />
    </button>
  );
};

Button.propTypes = {
  styles: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};
export default Button;
