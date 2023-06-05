import "@/styles/base/globals.sass";
import type { AppProps } from "next/app";
import { store } from "@/modules/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Layout from "@/layout/Layout";

import Layout from "@/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={"260952113847-40bmsga5bub0kgp7lnloij2k0qirhacg.apps.googleusercontent.com"}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GoogleOAuthProvider>
    </Provider>
  );
}
