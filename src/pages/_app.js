import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "next-auth/client";
import AppProvider from "context/AppContext";
import CartProvider from "context/CartContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  return (
    <Provider session={pageProps.session}>
      <AppProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </AppProvider>
    </Provider>
  );
}

export default MyApp;
