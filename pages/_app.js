import "@s/globals.css";
import { wrapper, store } from "../store/store";
import Header from "@l/header";
import { Provider } from "react-redux";

/* eslint-disable react/prop-types */
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);