import Link from "next/link";
import styles from "@/styles/components/StudyOverviewCard.module.sass";
import Card from "../common/Card";

type Props = {
  id: number;
  title: string;
  description: string;
  remainTime: string;
  tags: { id: number; label: string }[];
};

function StudyOverviewCard({
  id,
  title,
  description,
  remainTime,
  tags,
}: Props) {
  return (
    <Card className={styles.overviewContainer}>
      <Card.Addon>
        <small className={styles.overviewRemainTime}>{remainTime}</small>
      </Card.Addon>
      <Link href={`/study/${id}`}>
        <Card.HeadLine headingText={title} className={styles.overviewTitle} />
        <Card.SupportingText
          text={description}
          className={styles.overviewDescription}
        />
      </Link>
      <Card.Addon>
        <ul className={styles.overviewTags}>
          {tags.map(tag => (
            <li key={tag.id} className={styles.overviewTag}>
              {tag.label}
            </li>
          ))}
        </ul>
      </Card.Addon>
    </Card>
  );
}

export default StudyOverviewCard;
