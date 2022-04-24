import React from "react";
import PropTypes from "prop-types";

function Icon({ isHover }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="32"
      fill="none"
      viewBox="0 0 34 32"
    >
      <path
        fill={isHover ? "#fff" : "url(#paint0_linear_406_5485)"}
        d="M28.667.333H5.333c-2.756 0-5 2.244-5 5v4.719c0 1.755.637 3.35 1.667 4.576v15.705A1.667 1.667 0 003.667 32H17a1.667 1.667 0 001.667-1.667V22h6.666v8.333A1.667 1.667 0 0027 32h3.333A1.667 1.667 0 0032 30.333V14.627a7.09 7.09 0 001.667-4.577V5.333c0-2.756-2.244-5-5-5zm1.666 5v4.719c0 1.9-1.415 3.52-3.151 3.611l-.182.004a3.337 3.337 0 01-3.333-3.334V3.667h5c.92 0 1.666.748 1.666 1.666zm-16.666 5V3.667h6.666v6.666A3.337 3.337 0 0117 13.667a3.337 3.337 0 01-3.333-3.334zm-10-5c0-.918.746-1.666 1.666-1.666h5v6.666A3.337 3.337 0 017 13.667l-.182-.005c-1.736-.09-3.151-1.71-3.151-3.61V5.333zm10 18.334H7v-5h6.667v5z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_406_5485"
          x1="17"
          x2="17"
          y1="0.333"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EA9769"></stop>
          <stop offset="1" stopColor="#EA6969"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

Icon.propTypes = {
  isHover: PropTypes.bool.isRequired,
};
export default Icon;
