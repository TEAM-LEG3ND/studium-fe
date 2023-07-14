import styles from "@/styles/layout/Layout.module.sass";
import { useState } from "react";
import ProfileBtn from "../common/ProfileBtn";
import ProfileSubmenu from "../common/ProfileSubmenu";

function MainAddon() {
  const [profileSubmenuVisibility, setProfileSubmenuVisibility] =
    useState(false);

  const handleProfileBtnClick = () => {
    setProfileSubmenuVisibility(prev => !prev);
  };

  return (
    <div className={styles.mainAddons}>
      <ProfileBtn handleClick={handleProfileBtnClick} />
      {profileSubmenuVisibility ? <ProfileSubmenu /> : null}
    </div>
  );
}

export default MainAddon;
