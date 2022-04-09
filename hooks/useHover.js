import { useReducer, useEffect, useRef } from "react";

const hoverReducer = (isHover) => !isHover;

const useHover = (initialValue = false) => {
  const [isHover, setIsHover] = useReducer(hoverReducer, initialValue);
  const anchorRef = useRef(null);

  function handleHover() {
    setIsHover();
  }

  useEffect(() => {
    anchorRef.current?.addEventListener("mouseenter", handleHover);
    anchorRef.current?.addEventListener("mouseleave", handleHover);

    return () => {
      window.removeEventListener("mouseenter", handleHover);
      window.removeEventListener("mouseleave", handleHover);
    };
  }, []);

  return {
    ref: anchorRef,
    isHover,
  };
};
export default useHover;
