import React from "react";

function Icon({ isHover }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 20 21"
    >
      <path
        fill={isHover ? "#FF7CA3" : "#fff"}
        fillRule="evenodd"
        d="M4.167 9.667c0-2.758 2.242-5 5-5 2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5-2.758 0-5-2.243-5-5zm13.089 6.91l-2.83-2.83a6.626 6.626 0 001.407-4.08A6.674 6.674 0 009.167 3 6.674 6.674 0 002.5 9.667a6.674 6.674 0 006.667 6.666c1.538 0 2.952-.529 4.08-1.406l2.83 2.829a.831.831 0 001.179 0 .832.832 0 000-1.178z"
        clipRule="evenodd"
      ></path>
      <mask
        id="mask0_496_5535"
        style={{ maskType: "alpha" }}
        width="16"
        height="15"
        x="2"
        y="3"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill={isHover ? "#FF7CA3" : "#fff"}
          fillRule="evenodd"
          d="M4.167 9.667c0-2.758 2.242-5 5-5 2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5-2.758 0-5-2.243-5-5zm13.089 6.91l-2.83-2.83a6.626 6.626 0 001.407-4.08A6.674 6.674 0 009.167 3 6.674 6.674 0 002.5 9.667a6.674 6.674 0 006.667 6.666c1.538 0 2.952-.529 4.08-1.406l2.83 2.829a.831.831 0 001.179 0 .832.832 0 000-1.178z"
          clipRule="evenodd"
        ></path>
      </mask>
      <g mask="url(#mask0_496_5535)">
        <path fill="#fff" d="M0 0.5H20V20.5H0z"></path>
      </g>
    </svg>
  );
}

export default Icon;
