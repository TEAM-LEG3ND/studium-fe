import Link from "next/link";

import styles from "@/styles/components/RecruitItem.module.sass";

type RecruitItemHeaderProps = {
  title: string;
};

function RecruitItemHeader({ title }: RecruitItemHeaderProps) {
  return (
    <div className={styles.study_item_header}>
      <Link href={""}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default RecruitItemHeader;
