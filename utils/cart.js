export const formReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

export const initialCart = {
  products: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemExistInCart = state.products.find(
        ({ id }) => id === action.product.id
      );
      if (itemExistInCart) {
        const products = state.products.map((product) => {
          if (product.id === action.product.id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
        return { ...state, products: [...products] };
      }

      return {
        ...state,
        products: [
          ...state.products,
          {
            ...action.product,
            quantity: action.product.quantity ?? 1,
          },
        ],
      };

    case "UPDATE_PRODUCT": {
      const products = state.products.map((product) => {
        if (product.id === action.product.id) {
          return { ...action.product };
        }
        return product;
      });
      return { ...state, products: [...products] };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: [
          ...state.products.filter(({ id }) => id !== action.product.id),
        ],
      };

    case "EMPTY_CART":
      return initialCart;
    default:
      return state;
  }
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
