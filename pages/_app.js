import { useReducer } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "next-auth/client";
import AppContext from "/context/AppContext";
import CartContext from "/context/CartContext";
import useAppSettings from "/hooks/useAppSettings";
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
  const appSettings = useAppSettings();
  return (
    <Provider session={pageProps.session}>
      <AppContext.Provider value={appSettings}>
        <CartContext.Provider value={{ cart, updateCart }}>
          <Component {...pageProps} />
        </CartContext.Provider>
      </AppContext.Provider>
    </Provider>
  );
}

export default MyApp;
