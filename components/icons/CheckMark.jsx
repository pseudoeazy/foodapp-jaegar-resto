import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#EA7C69"
        fillRule="evenodd"
        d="M10.864 6.404l-3.046 4a.666.666 0 01-.526.263h-.005a.668.668 0 01-.524-.256L5.14 8.34a.666.666 0 111.05-.822l1.09 1.391 2.522-3.313a.667.667 0 011.06.808zM8 1.334a6.667 6.667 0 100 13.333A6.667 6.667 0 008 1.334z"
        clipRule="evenodd"
      ></path>
      <mask
        id="mask0_512_1737"
        style={{ maskType: "alpha" }}
        width="14"
        height="14"
        x="1"
        y="1"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M10.864 6.404l-3.046 4a.666.666 0 01-.526.263h-.005a.668.668 0 01-.524-.256L5.14 8.34a.666.666 0 111.05-.822l1.09 1.391 2.522-3.313a.667.667 0 011.06.808zM8 1.334a6.667 6.667 0 100 13.333A6.667 6.667 0 008 1.334z"
          clipRule="evenodd"
        ></path>
      </mask>
      <g mask="url(#mask0_512_1737)">
        <path fill="#EA7C69" d="M0 0H16V16H0z"></path>
      </g>
    </svg>
  );
}

export default Icon;
