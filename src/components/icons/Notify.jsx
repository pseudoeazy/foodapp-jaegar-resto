import React from "react";
import PropTypes from "prop-types";

function Icon({ isHover, isSettings }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      fill="none"
      viewBox="0 0 18 20"
    >
      <path
        fill={
          isSettings
            ? !isHover
              ? "#fff"
              : "#EA7C69"
            : isHover
            ? "#fff"
            : "#EA7C69"
        }
        d="M11.608 17.69c.296.242.343.681.105.982-.176.221-.38.42-.596.583a3.495 3.495 0 01-4.902-.586.703.703 0 01.11-.98.684.684 0 01.968.11c.345.44.854.724 1.413.79a2.138 2.138 0 001.577-.445c.133-.1.253-.217.356-.347a.684.684 0 01.969-.106zM2.152 7l.012-.596c.01-.255.023-.492.043-.723C2.507 2.445 5.596 0 8.965 0h.071c3.367 0 6.457 2.443 6.767 5.685.018.206.026.39.028.647l.001.788c0 .072.002.135.004.194l.009.196.045.187a3.93 3.93 0 00.726 1.431l.15.177.063.08c.406.607.638 1.313.671 2.074l-.001.403a4.076 4.076 0 01-.965 2.496 4.799 4.799 0 01-3.047 1.488 41.583 41.583 0 01-8.974 0 4.874 4.874 0 01-3.086-1.524 4.07 4.07 0 01-.926-2.66v-.238A4.08 4.08 0 011.17 9.38l.068-.086a3.85 3.85 0 00.928-1.82l-.015.06L2.152 7zm6.884-5.605h-.071c-2.698 0-5.157 1.946-5.385 4.412-.012.135-.021.275-.029.422l-.016.467-.006.919-.015.142A5.251 5.251 0 012.25 10.24l.05-.057-.089.146a2.67 2.67 0 00-.313.94l-.018.19v.218a2.656 2.656 0 00.575 1.716 3.485 3.485 0 002.198 1.065c2.887.314 5.8.314 8.7 0a3.418 3.418 0 002.156-1.031c.412-.494.63-1.117.614-1.773v-.164a2.586 2.586 0 00-.435-1.323l.016.026-.138-.162a5.33 5.33 0 01-1.013-1.997l-.065-.276-.013-.092a7.52 7.52 0 01-.018-.4l-.003-.905a6.69 6.69 0 00-.022-.548c-.237-2.472-2.697-4.418-5.395-4.418z"
      ></path>
    </svg>
  );
}

Icon.propTypes = {
  isHover: PropTypes.bool.isRequired,
  isSettings: PropTypes.bool,
};
export default Icon;