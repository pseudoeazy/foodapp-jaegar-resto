import { useReducer } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "next-auth/client";
import CartContext from "/context/CartContext";
import { cartReducer, initialCart } from "utils/cart";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  const [cart, updateCart] = useReducer(cartReducer, initialCart);
  return (
    <Provider session={pageProps.session}>
      <CartContext.Provider value={{ cart, updateCart }}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </Provider>
  );
}

export default MyApp;
