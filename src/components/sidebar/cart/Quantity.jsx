import { useReducer, useEffect } from "react";
import { useCart } from "context/CartContext";
import { formReducer } from "utils/cart";

const styles = {
  quantity: `
      flex
      items-center
      justify-center
      w-12
      h-12
      px-4
      py-3
      text-base 
      text-white
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

const Quantity = ({ item }) => {
  const { updateCart } = useCart();
  const [formData, setFormData] = useReducer(formReducer, {
    quantity: item.quantity ?? 1,
  });

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  useEffect(() => {
    if (formData.quantity) {
      updateCart({
        type: "UPDATE_PRODUCT",
        product: { ...item, quantity: formData.quantity },
      });
    }
  }, [formData.quantity, item, updateCart]);

  return (
    <form>
      <input
        name="quantity"
        className={styles.quantity}
        value={formData.quantity}
        onChange={handleChange}
      />
    </form>
  );
};

export default Quantity;
