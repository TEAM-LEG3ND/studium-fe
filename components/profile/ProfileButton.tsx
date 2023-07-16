import styles from "@/styles/components/ProfileBtn.module.sass";
import Avatar from "../common/icon/Avatar";
import Button from "../common/Button";
import ArrowDown from "../common/icon/ArrowDown";

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
        <ArrowDown />
      </Button>
    </div>
  );
}

export default ProfileButton;
