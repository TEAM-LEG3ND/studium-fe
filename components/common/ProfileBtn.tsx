import Image from "next/image";

import styles from "@/styles/components/ProfileBtn.module.sass";

function ProfileBtn() {
  return (
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
  );
}

export default ProfileBtn;
