import Link from "next/link";

import styles from "@/styles/components/RecruitItem.module.sass";

type RecruitItemTagsProps = {
  tags: string[];
};

function RecruitItemTags({ tags }: RecruitItemTagsProps) {
  return (
    <div className={styles.study_item_tag_list}>
      {tags.map((tag, i) => (
        <div key={i} className={styles.study_item_tag}>
          <Link href={""}>{tag}</Link>
        </div>
      ))}
    </div>
  );
}

export default RecruitItemTags;
