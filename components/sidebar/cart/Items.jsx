import Image from "next/image";
import PropTypes from "prop-types";
import { Bin } from "@components/icons/";
import withHover from "@components/hoc/withHover";
import scrollbarStyle from "@components/sidebar/Navbar.module.css";
import cartItems from "@data/cartItems";

const formStyles = {
  input: `    transition
    duration-500
    ease-in-out
    transform
    border border-basebg-200
    rounded-lg
    bg-formbg
    focus:outline-none
    focus:border-transparent
    focus:ring-2
    focus:ring-white
    focus:ring-offset-2
    focus:ring-offset-formbg`,
};
const styles = {
  quantity: `
  ${formStyles.input}
    flex
    items-center
    justify-center
    w-12
    h-12
    px-4
    py-3
    text-base 
    text-white
   `,
  orderNote: `
  ${formStyles.input}
   w-[18.5625rem] 
   h-12
   p-3.5
    text-base 
  
   `,
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
  return (
    <div className={`${isPopup && "pb-[3.3125rem]"}`}>
      <header className="flex h-[1.375rem] my-6 text-base font-semibold text-white ">
        <h4 className="w-[15.5625rem]">Item</h4>
        <div className="flex-1 flex justify-between ">
          <h4>Qty</h4>
          <h4 className="pr-1">Price</h4>
        </div>
      </header>
      <section
        className={`h-[28.375rem]  overflow-x-hidden  overflow-y-scroll border-y border-basebg-200   ${scrollbarStyle.scrollbar}`}
      >
        {cartItems.map((item, idx) => (
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
                <form>
                  <input
                    className={styles.quantity}
                    defaultValue={item.quantity}
                  />
                </form>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <form>
                <input
                  className={`${styles.orderNote} placeholder:text-textbg-200 text-white`}
                  placeholder="Order Note..."
                  defaultValue={item.orderNote}
                />
              </form>
              <div className="flex">
                <HoverComponent isButton />
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
