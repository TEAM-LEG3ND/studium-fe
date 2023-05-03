import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/layout/Layout.module.sass";

import { WithChildren } from "@/utils/util-types";
import { noto_sans_kr, source_sans_pro } from "@/utils/fonts";
import { HOME_PATH } from "@/utils/routes";

type LayoutProps = WithChildren<{}>;

function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${styles.root_container} ${noto_sans_kr.className} ${source_sans_pro.variable}`}
    >
      <header className={styles.main_header}>
        <div className={styles.logo_container}>
          <Link href={HOME_PATH}>
            <Image
              src={`/studium-logo.png`}
              alt={"Studium logo"}
              width={60}
              height={56}
              className={styles.logo_img}
              aria-hidden
            />
            <Image
              src={`/studium-title.svg`}
              alt={"Studium title"}
              width={120}
              height={40}
              className={styles.logo_title}
              aria-hidden
            />
          </Link>
        </div>
        <nav aria-label="primary-nav" className={styles.gnb}>
          <Link href={""}>스터디</Link>
          <Link href={""}>템플릿</Link>
          <Link href={""}>책갈피</Link>
        </nav>
        <div className={styles.profile_container}>
          <button
            aria-label="profile dropdown button"
            className={styles.profile_btn}
          >
            <Image
              src={"/icon/avatar.svg"}
              alt="profile_icon"
              width={44}
              height={44}
              aria-hidden
            />
          </button>
        </div>
      </header>
      <main className={styles.contents_container}>{children}</main>
    </div>
  );
}

export default Layout;
