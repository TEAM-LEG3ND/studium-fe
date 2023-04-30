import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/layout/Layout.module.sass";

import { noto_sans_kr, source_sans_pro } from "@/utils/fonts";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <header></header>
      <main className={`${noto_sans_kr.className} ${source_sans_pro.variable}`}>
        {children}
      </main>
    </>
  );
}

export default Layout;
