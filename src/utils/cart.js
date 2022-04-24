export const formReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

export const getSubtotal = (state, cart) => {
  if (!Boolean(cart.products.length)) {
    return 0;
  }
  const subtotal = cart.products.reduce(
    (accumulator, { price, quantity }) => accumulator + price * quantity,
    0
  );
  return subtotal;
};
