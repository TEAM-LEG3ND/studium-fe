import Link from "next/link";
import { useState } from "react";

import styles from "@/styles/components/MainHeader.module.sass";
import { HOME_PATH } from "@/utils/routes";
import ProfileBtn from "../common/ProfileBtn";
import ProfileSubmenu from "../common/ProfileSubmenu";
import Logo from "../common/icon/Logo";
import MainNavigation from "./MainNavigation";

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
      <MainNavigation />
      <ProfileBtn handleClick={handleProfileBtnClick} />
      {profileSubmenuVisibility ? <ProfileSubmenu /> : null}
    </header>
  );
}

export default GNB;
