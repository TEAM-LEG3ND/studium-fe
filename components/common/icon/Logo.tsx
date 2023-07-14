import Image from "next/image";
import styles from "@/styles/components/Icon.module.sass";

function Logo() {
  return (
    <div className={styles.homeLogo}>
      <Image
        src="https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/studium-logo.png"
        alt="Studium logo"
        width={48}
        height={40}
        aria-hidden
      />
      <Image
        src="https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/studium-title.svg"
        alt="Studium title"
        width={120}
        height={40}
        aria-hidden
        priority
      />
    </div>
  );
}

export default Logo;
