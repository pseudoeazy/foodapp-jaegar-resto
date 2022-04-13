import Items from "components/sidebar/cart/Items";
import Header from "./Header";
import PaymentMethod from "./PaymentMethod";
import orderType from "constants/orderType";
import styles from "@components/sidebar/Navbar.module.css";

const style = {
  layout: `duration-500
  ease-in-out
  transform`,
  leftLayout: `
    fixed z-10 w-[27rem] h-screen 
    overflow-x-hidden overflow-y-scroll 
    bg-basebg-400 p-6 ${styles.scrollbar}
    rounded-tl-2xl rounded-bl-2xl`,
  input: `    
    transition
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
  button: `
  flex justify-center items-center
  w-[9.75rem]
  h-12 
  rounded-lg
  text-center
      transition
      duration-500
      ease-in-out
      transform`,
};

const Payment = () => {
  return (
    <section
      className={`fixed z-30 flex justify-end w-[74.625rem] min-h-screen mx-auto ${style.layout}`}
      style={{ backgroundColor: `rgba(0, 0, 0, 0.7)` }}
    >
      <aside className={`relative flex w-[52rem]  `}>
        <section className="w-[27rem]">
          <div className={style.leftLayout}>
            <Header hasButton title="Confirmation" content="Orders #34562" />
            <Items isPopup />
          </div>
        </section>
        <section className="w-[25rem]">
          <div
            className={`fixed z-10 w-[25rem] h-screen overflow-x-hidden overflow-y-scroll border-l border-basebg-200 bg-basebg-400 p-6 ${styles.scrollbar}`}
          >
            <Header title="Payment" content="3 payment method available" />
            <PaymentMethod />
            <section className="pt-4">
              <form className="flex flex-col space-y-[5.5625rem]">
                <div className="flex justify-between">
                  <div className="flex-1 mr-[0.8125rem]">
                    <label
                      htmlFor="orderType"
                      className="text-white text-sm font-medium"
                    >
                      Order Type
                    </label>
                    <select className="w-[9.75rem] h-12 rounded-lg bg-basebg-400 p-3.5 text-white border border-basebg-200 text-sm font-medium">
                      {orderType.map(({ label, value }, idx) => (
                        <option key={idx} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="tableNo"
                      className="text-white text-sm font-medium"
                    >
                      Table no.
                    </label>
                    <input
                      placeholder="140"
                      className={`w-[9.75rem] h-12 p-3.5 ${style.input} `}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className=" mr-[0.8125rem]">
                    <button
                      type="button"
                      className={`hover:bg-primary hover:text-white text-primary border border-primary ${style.button}`}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="">
                    <button
                      type="button"
                      style={{
                        filter: `drop-shadow(0px 8px 24px rgba(234, 124, 105, 0.32))`,
                      }}
                      className={` text-white  bg-primary hover:bg-transparent hover:border hover:border-primary  ${style.button}`}
                    >
                      Confirm Payment
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </section>
      </aside>
    </section>
  );
};

export default Payment;
