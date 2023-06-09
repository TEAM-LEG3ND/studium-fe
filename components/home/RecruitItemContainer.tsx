import { WithChildren } from "@/utils/util-types";
import styles from "@/styles/components/RecruitItem.module.sass";

function RecruitItemContainer({ children }: WithChildren<{}>) {
  return <div className={styles.study_item}>{children}</div>;
}

export default RecruitItemContainer;
