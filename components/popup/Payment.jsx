import Items from "components/sidebar/cart/Items";
import Header from "./Header";
import styles from "@components/sidebar/Navbar.module.css";

const style = {
  leftLayout: `
    fixed z-10 w-[27rem] h-screen 
    overflow-x-hidden overflow-y-scroll 
    bg-basebg-400 p-6 ${styles.scrollbar}
    rounded-tl-2xl rounded-bl-2xl`,
};

const Payment = () => {
  return (
    <section
      className="fixed z-30 flex justify-end w-[74.625rem] min-h-screen mx-auto "
      style={{ backgroundColor: `rgba(0, 0, 0, 0.7)` }}
    >
      <aside className="flex w-[52rem] ">
        <section className="w-[27rem]">
          <div className={style.leftLayout}>
            <Header hasButton title="Confirmation" content="Orders #34562" />
            <Items isPopup />
          </div>
        </section>
        <section className="w-[25rem]">
          <div
            className={`fixed z-10 w-[25rem] h-screen overflow-x-hidden overflow-y-scroll border-l border-basebg-200 bg-basebg-400 p-6 ${styles.scrollbar}`}
          ></div>
        </section>
      </aside>
    </section>
  );
};

export default Payment;
