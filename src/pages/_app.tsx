import type { AppProps } from "next/app";
import "../styles/globals.css";
import { store } from "~/redux/store";
import { Provider } from "react-redux";
import Layout from "../layout/Layout";

// import { Provider } from "react-redux";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
