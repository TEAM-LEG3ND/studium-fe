import styles from "@/styles/components/ProfileBtn.module.sass";
import Avatar from "../common/icon/Avatar";
import Button from "../common/Button";

type Props = {
  handleClick: () => void;
};

function ProfileButton({ handleClick }: Props) {
  return (
    <div className={styles.profileContainer}>
      <Button
        type="button"
        onClick={handleClick}
        aria-label="profile dropdown button"
        className={styles.profileBtn}
      >
        <Avatar />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"
          />
        </svg>
      </Button>
    </div>
  );
}

export default ProfileButton;
