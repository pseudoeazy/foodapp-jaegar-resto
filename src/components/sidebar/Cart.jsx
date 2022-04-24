import Header from "@components/sidebar/cart/Header";
import Items from "@components/sidebar/cart/Items";
import styles from "@components/sidebar/Navbar.module.css";

/**
 * correct design width size (25.5625rem) causes overflow
 * I have used 27rem instead of 25.5625rem to accomodate oveflow items
 */
const Cart = () => {
  return (
    <aside className="w-[27rem]">
      <div
        className={`fixed z-10 w-[27rem] h-screen overflow-x-hidden overflow-y-scroll bg-basebg-400 p-6 ${styles.scrollbar}`}
      >
        <Header />
        <Items />
      </div>
    </aside>
  );
};

export default Cart;
