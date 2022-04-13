import { useReducer, useEffect, useContext } from "react";
import CartContext from "context/CartContext";
import { formReducer } from "utils/cart";

const styles = {
  orderNote: `
     w-[18.5625rem] 
     h-12
     p-3.5
      text-base 
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
    focus:ring-offset-formbg
     `,
};

const OrderNote = ({ item }) => {
  const { updateCart } = useContext(CartContext);

  const [formData, setFormData] = useReducer(formReducer, {
    orderNote: item.orderNote ?? "",
  });

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  useEffect(() => {
    if (formData.orderNote) {
      updateCart({
        type: "UPDATE_PRODUCT",
        product: { ...item, orderNote: formData.orderNote },
      });
    }
  }, [formData.orderNote, item, updateCart]);

  return (
    <form>
      <input
        name="orderNote"
        className={`${styles.orderNote} placeholder:text-textbg-200 text-white`}
        placeholder="Order Note..."
        value={formData.orderNote}
        onChange={handleChange}
      />
    </form>
  );
};

export default OrderNote;
