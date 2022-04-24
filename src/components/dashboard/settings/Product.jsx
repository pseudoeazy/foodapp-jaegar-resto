import Image from "next/image";
import AddDish from "./AddDish";
import useHover from "hooks/useHover";

const styles = {
  li: `
    w-[13.8125rem]
    h-[18.6875rem]
    first:border-dashed
    first:border-primary 
    border
    border-basebg-200
    rounded-lg
    duration-200
    ease-in-out
    transform 
    `,
  button: `
    w-full self:end 
    flex justify-center 
    items-center h-[3.25rem] 
    bg-primary opacity-20
     hover:opacity-100 
     rounded-b-lg text-center 
     text-white 
    duration-200
    ease-in-out
    transform `,
};

const Product = ({ index, name, price, imgUrl, quantity }) => {
  const { ref, isHover } = useHover();
  return (
    <li
      className={`${styles.li}`}
      ref={ref}
      style={{
        ...(isHover && {
          filter: `drop-shadow(0px 8px 24px rgba(234, 124, 105, 0.32))`,
        }),
      }}
    >
      {index === 0 ? (
        <AddDish />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center pt-6 pb-1">
            <figure className="block">
              <Image
                src={`/images/${imgUrl}`}
                alt={name}
                width={127}
                height={127}
              />
            </figure>
            <div className="w-36 flex flex-col items-center text-center mt-4">
              <span className="text-sm font-medium text-white">{name}</span>
              <span className="mt-2 text-sm font-normal text-textbg-300">
                <span>$ {price}</span> . <span> {quantity} Bowls</span>
              </span>
            </div>
          </div>
          <button type="button" className={styles.button}>
            Edit dish
          </button>
        </div>
      )}
    </li>
  );
};
export default Product;
