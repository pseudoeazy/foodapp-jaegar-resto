import Image from "next/image";
import PropTypes from "prop-types";
import { BsCartX } from "react-icons/bs";
import { Bin } from "@components/icons/";
import withHover from "@components/hoc/withHover";
import Quantity from "./Quantity";
import OrderNote from "./OrderNote";
import { useApp } from "context/AppContext";
import { useCart } from "context/CartContext";
import scrollbarStyle from "@components/sidebar/Navbar.module.css";

const styles = {
  button: `
   
   w-full h-12 mt-[2.625rem] 
   mb-6 rounded-lg bg-primary 
   text-sm font-semibold 
   text-basebg-100 
   hover:text-primary 
   hover:bg-transparent
   hover:border-primary
   hover:shadow-lg
    duration-500
    ease-in-out
    transform
    border border-basebg-200`,
};
const HoverComponent = withHover(Bin);

const Items = ({ isPopup }) => {
  const { setAppSettings } = useApp();
  const { cart, updateCart } = useCart();

  return (
    <div className={`${isPopup && "pb-[3.3125rem]"}`}>
      {isPopup == false && (
        <header className="flex h-[1.375rem] my-6 text-base font-semibold text-white ">
          <h4 className="w-[15.5625rem]">Item</h4>
          <div className="flex-1 flex justify-between ">
            <h4>Qty</h4>
            <h4 className="pr-1">Price</h4>
          </div>
        </header>
      )}
      <section
        className={`h-[28.375rem]  overflow-x-hidden  overflow-y-scroll border-y border-basebg-200 ${
          isPopup && "mt-6"
        }   ${scrollbarStyle.scrollbar}`}
      >
        {cart.products.length === 0 && (
          <div className="relative z-10 grid grid-cols-1  mt-6 ">
            <div className="flex justify-center items-center w-full ">
              <p className="flex flex-col  items-center justify-center text-center p-1 text-white text-base">
                Your Cart is empty
                <BsCartX />
              </p>
            </div>
          </div>
        )}
        {!!cart.products.length &&
          cart.products.map((item, idx) => (
            <div
              key={idx}
              className="relative z-10 grid grid-cols-1 grid-rows-2 mt-6 "
            >
              <div className="flex py-1">
                <div className="flex items-center w-[15.5625rem] ">
                  <div className="flex w-[11.75rem] ">
                    <figure>
                      <Image
                        src={`/images/${item.imgUrl}`}
                        alt={item.name}
                        width={40}
                        height={40}
                      />
                    </figure>
                    <div className="flex flex-col ml-0.5">
                      <span
                        title={item.name}
                        className="text-sm font-medium text-white"
                      >
                        {item.name.slice(0, 18) + "..."}
                      </span>
                      <span className="block mt-1 text-textbg-300 text-xs">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-between text-white">
                  <Quantity item={item} />
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <OrderNote item={item} />
                <div className="flex">
                  <HoverComponent
                    isButton
                    handleClick={() =>
                      updateCart({ type: "REMOVE_FROM_CART", product: item })
                    }
                  />
                </div>
              </div>
            </div>
          ))}
      </section>
      <section className="h-[3.875rem] flex flex-col space-y-4 mt-6 ">
        <div className="flex justify-between">
          <p className="font-normal text-sm text-textbg-300">Discount</p>
          <p className="text-white text-base font-medium">$0</p>
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-sm text-textbg-300">Sub total</p>
          <p className="text-white text-base font-medium">$2136</p>
        </div>
      </section>
      {isPopup === false && (
        <section>
          <button
            className={styles.button}
            style={{
              filter: `drop-shadow(0px 8px 24px rgba(234, 124, 105, 0.32))`,
            }}
            type="button"
            onClick={() =>
              setAppSettings({
                type: "CONTIUE_TO_PAYMENT",
              })
            }
          >
            Continue to Payment
          </button>
        </section>
      )}
    </div>
  );
};

Items.propTypes = {
  isPopup: PropTypes.bool,
};

Items.defaultProps = {
  isPopup: false,
};

export default Items;
