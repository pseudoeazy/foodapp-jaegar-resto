import React from "react";
import PropTypes from "prop-types";

function Icon({ isHover }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill={isHover ? "#EA7C69" : "#ABBBC2"}
        d="M7 .333a6.667 6.667 0 110 13.334A6.667 6.667 0 017 .333zm0 1a5.667 5.667 0 10.001 11.335 5.667 5.667 0 000-11.334zm.004 7.698a.5.5 0 01.067.995l-.074.005a.5.5 0 01-.068-.996l.075-.004zM6.997 3.97a.5.5 0 01.495.432l.005.068v2.946a.5.5 0 01-.996.067l-.004-.067V4.47a.5.5 0 01.5-.5z"
      ></path>
    </svg>
  );
}
Icon.propTypes = {
  isHover: PropTypes.bool.isRequired,
};
export default Icon;
