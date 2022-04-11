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
        d="M3.322.877a4.374 4.374 0 013.5.36l.176.106.179-.106a4.38 4.38 0 013.32-.413l.178.053c2.448.788 3.545 3.462 2.72 6.02a8.28 8.28 0 01-1.983 3.158 23.128 23.128 0 01-3.997 3.11l-.153.095a.488.488 0 01-.508.004l-.164-.098a23.143 23.143 0 01-4.003-3.115A8.285 8.285 0 01.603 6.886c-.82-2.549.272-5.221 2.72-6.01zm3.261 1.36a3.4 3.4 0 00-2.962-.433C1.725 2.414.866 4.52 1.528 6.578a7.295 7.295 0 001.743 2.778 22.148 22.148 0 003.825 2.977l-.095-.06.312-.196a22.15 22.15 0 003.063-2.382l.352-.335a7.29 7.29 0 001.743-2.772c.666-2.067-.198-4.173-2.095-4.784a3.407 3.407 0 00-3.085.52.488.488 0 01-.577.006l-.13-.094zM9.58 3.321a2.294 2.294 0 011.584 1.997.487.487 0 01-.972.082 1.32 1.32 0 00-.908-1.15.487.487 0 11.296-.929z"
      ></path>
    </svg>
  );
}
Icon.propTypes = {
  isHover: PropTypes.bool.isRequired,
};
export default Icon;
