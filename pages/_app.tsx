import "@/styles/base/globals.sass";
import type { AppProps } from "next/app";

import { noto_sans_kr, source_sans_pro } from "@/utils/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${noto_sans_kr.className} ${source_sans_pro.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
