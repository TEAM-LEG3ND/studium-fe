import Image from "next/image";

import styles from "@/styles/components/ProfileBtn.module.sass";

type ProfileBtnProps = {
  handleClick: () => void;
};

function ProfileBtn({ handleClick }: ProfileBtnProps) {
  return (
    <div className={styles.profile_container}>
      <button
        onClick={handleClick}
        aria-label="profile dropdown button"
        className={styles.profile_btn}
      >
        <Image
          src={`https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/icon/avatar.svg`}
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
