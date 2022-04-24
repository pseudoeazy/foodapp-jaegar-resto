import { useReducer, useEffect, useRef } from "react";

const hoverReducer = (isHover) => !isHover;

const useHover = (initialValue = false) => {
  const [isHover, setIsHover] = useReducer(hoverReducer, initialValue);
  const anchorRef = useRef(null);

  function handleHover() {
    setIsHover();
  }

  useEffect(() => {
    const element = anchorRef?.current;
    element.addEventListener("mouseenter", handleHover);
    element.addEventListener("mouseleave", handleHover);

    return () => {
      element.removeEventListener("mouseenter", handleHover);
      element.removeEventListener("mouseleave", handleHover);
    };
  }, []);

  return {
    ref: anchorRef,
    isHover,
  };
};
export default useHover;
