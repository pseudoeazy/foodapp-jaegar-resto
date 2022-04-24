import React from "react";
import PropTypes from "prop-types";

const BackArrow = ({ isHover }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke={isHover ? "#EA7C69" : "#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="M8.5 16.5L4 12m0 0l4.5-4.5M4 12h16"
    ></path>
  </svg>
);

BackArrow.propTypes = {
  isHover: PropTypes.bool.isRequired,
};

export default BackArrow;
