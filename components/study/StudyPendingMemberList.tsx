import usePendingMemberListQuery from "@/queries/usePendingMemberListQuery";
import styles from "@/styles/pages/Study.module.sass";
import Link from "next/link";

export type StudyPendingMemberListProps = {
  studyId: number;
};

function StudyPendingMemberList({ studyId }: StudyPendingMemberListProps) {
  const pendingMemberList = usePendingMemberListQuery(studyId);

  return (
    <ul className={styles.pendingMemberList}>
      {pendingMemberList.map(member => (
        <Link href={`/study/${studyId}/apply/${member.id}`}>
          <li className={styles.pendingMemberItem}>
            <header>
              <h3 className={styles.title}>{member.title}</h3>
            </header>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default StudyPendingMemberList;
