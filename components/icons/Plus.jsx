import React from "react";
import PropTypes from "prop-types";

function Icon({ isHover }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke={isHover ? "#EA7C69" : "#FAFAFA"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M9 1.5V9m0 7.5V9m0 0h7.5M9 9H1.5"
      ></path>
    </svg>
  );
}
Icon.propTypes = {
  isHover: PropTypes.bool.isRequired,
};
export default Icon;
