import React from "react";
import PropTypes from "prop-types";

function Icon({ isHover }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
    >
      <path
        stroke={isHover ? "#fff" : "#ABBBC2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 7.2c1.7 1 2.5 2.8 2.5 4.8 0 2.5-2.5 4.5-5 4.5h-2.6l-.6 3.6a1 1 0 01-1 .8H8.6a.5.5 0 01-.5-.6l.2-1.4m2.2-5.9H13c2.5 0 5-2.5 5-5 0-3-1.9-5-5-5H7.5c-.5 0-1 .5-1 1l-2 14c0 .5.5 1 1 1h2.8l1.2-5c.1-.6.4-1 1-1z"
      ></path>
    </svg>
  );
}
Icon.propTypes = {
  isHover: PropTypes.bool.isRequired,
};
export default Icon;
