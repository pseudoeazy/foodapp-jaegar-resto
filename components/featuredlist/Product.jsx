import { useContext } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import useHover from "hooks/useHover";
import CartContext from "context/CartContext";

const styles = {
  info: `
    flex justify-center items-end 
    w-full h-[14.125rem] self-end 
    p-6 bg-basebg-400 rounded-2xl
    transition
    duration-300
    linear
    transform`,
};

const Product = ({ id, name, price, imgUrl, quantity }) => {
  const { updateCart } = useContext(CartContext);
  const { ref, isHover } = useHover();

  const handleClick = (product) => {
    updateCart({ type: "ADD_TO_CART", product });
  };
  return (
    <div className="relative flex  w-48 h-[16.25rem] ">
      <div className="absolute left-1/2 z-20">
        <figure className="relative -left-1/2">
          <Image
            src={`/images/${imgUrl}`}
            alt={name}
            width={132}
            height={132}
          />
        </figure>
      </div>
      <div
        role="button"
        ref={ref}
        style={{
          ...(isHover && {
            filter: `drop-shadow(0px 8px 24px rgba(234, 124, 105, 0.32))`,
            cursor: `pointer`,
          }),
        }}
        className={styles.info}
        onClick={() => handleClick({ id, name, price, imgUrl, quantity: 1 })}
      >
        <div className="flex flex-col items-center space-y-1 w-36 h-[5.5rem] ">
          <span className="block h-9 text-center font-medium text-sm text-white">
            {name}
          </span>
          <span className="block text-center font-normal text-sm text-white">
            $ {price}
          </span>
          <span className="block text-center font-normal text-sm text-textbg-300">
            {quantity} Bowls available
          </span>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
export default Product;
