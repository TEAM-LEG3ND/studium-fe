import styles from "@/styles/layout/Layout.module.sass";
import { useState } from "react";
import ProfileButton from "../profile/ProfileButton";
import ProfileSubmenu from "../profile/ProfileSubmenu";

function MainAddon() {
  const [profileSubmenuVisibility, setProfileSubmenuVisibility] =
    useState(false);

  const handleProfileBtnClick = () => {
    setProfileSubmenuVisibility(prev => !prev);
  };

  return (
    <div className={styles.mainAddons}>
      <ProfileButton handleClick={handleProfileBtnClick} />
      {profileSubmenuVisibility ? <ProfileSubmenu /> : null}
    </div>
  );
}

export default MainAddon;
