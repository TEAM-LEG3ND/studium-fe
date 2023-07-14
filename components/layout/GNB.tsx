import Link from "next/link";
import { useState } from "react";

import styles from "@/styles/components/MainHeader.module.sass";
import {
  HOME_PATH,
  STUDIES_PATH,
  TEMPLATES_PATH,
  BOOKMARKS_PATH,
} from "@/utils/routes";
import ProfileBtn from "../common/ProfileBtn";
import ProfileSubmenu from "../common/ProfileSubmenu";
import Logo from "../common/icon/Logo";

function GNB() {
  const [profileSubmenuVisibility, setProfileSubmenuVisibility] =
    useState(false);
  const handleProfileBtnClick = () => {
    setProfileSubmenuVisibility(prev => !prev);
  };

  return (
    <header className={styles.mainHeader}>
      <div>
        <Link href={HOME_PATH}>
          <Logo className={styles.homeLogo} />
        </Link>
      </div>
      <nav aria-label="primary-nav" className={styles.gnb}>
        <Link href={STUDIES_PATH}>스터디</Link>
        <Link href={TEMPLATES_PATH}>템플릿</Link>
        <Link href={BOOKMARKS_PATH}>책갈피</Link>
      </nav>
      <ProfileBtn handleClick={handleProfileBtnClick} />
      {profileSubmenuVisibility ? <ProfileSubmenu /> : null}
    </header>
  );
}

export default GNB;
