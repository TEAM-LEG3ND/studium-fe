import useStudyJournalListQuery from "@/queries/useStudyJournalListQuery";
import styles from "@/styles/pages/Study.module.sass";
import Link from "next/link";

export type StudyJournalListProps = {
  studyId: number;
};

function StudyJournalList({ studyId }: StudyJournalListProps) {
  const { journalList: studyJournalList } = useStudyJournalListQuery(studyId);

  return (
    <ul className={styles.studyJournalList}>
      {studyJournalList.map(journal => (
        <Link href={`/study/journal/${journal.id}`}>
          <li className={styles.studyJournalItem}>
            <header>
              <h3>{journal.title}</h3>
              <small className={styles.studyJournalItemAuthor}>
                {journal.author}
              </small>
              <small className={styles.studyJournalItemDate}>
                {journal.updatedAt}
              </small>
            </header>
            <div>
              <p>{journal.content}</p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default StudyJournalList;
