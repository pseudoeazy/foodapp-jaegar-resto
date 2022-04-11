import { Plus } from "components/icons";
import useHover from "hooks/useHover";

const styles = {
  button: `
  w-full
  h-full
  flex
  flex-col
  justify-center
  items-center
  `,
};
const AddDish = () => {
  const { ref, isHover } = useHover();
  return (
    <button className={`${styles.button}`}>
      <span ref={ref} className="h-12 w-12 flex justify-center items-center ">
        <Plus isHover={!isHover} />
      </span>
      <span className="font-semibold text-primary text-base">Add new dish</span>
    </button>
  );
};

export default AddDish;
