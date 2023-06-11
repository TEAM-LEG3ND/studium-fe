import "@/styles/base/globals.sass";
import type { AppProps } from "next/app";
import { store } from "@/modules/store";
import { Provider } from "react-redux";

import { initMocks } from "@/mocks";
import Layout from "@/layout/Layout";

if (process.env.NODE_ENV === "development") {
  initMocks();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
