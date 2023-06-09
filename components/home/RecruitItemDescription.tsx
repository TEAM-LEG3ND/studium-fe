import styles from "@/styles/components/RecruitItem.module.sass";
import Link from "next/link";

type RecruitItemDescriptionProps = {
  description: string;
};

function RecruitItemDescription({ description }: RecruitItemDescriptionProps) {
  return (
    <Link href={""}>
      <p className={styles.study_item_description}>{description}</p>
    </Link>
  );
}

export default RecruitItemDescription;
