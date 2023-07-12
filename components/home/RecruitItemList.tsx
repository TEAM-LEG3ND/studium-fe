import { useEffect, useRef } from "react";
import styles from "@/styles/pages/Home.module.sass";
import { StudyOverview } from "@/types/study";
import { getStudyOverviews } from "@/factories/homeFactory";
import RecruitItem from "./RecruitItem";

type RecruitItemListProps = {
  studyOverviews: StudyOverview[];
  sortType: string;
  handleStudyOverviews: (overviews: StudyOverview[]) => void;
};

function RecruitItemList({
  studyOverviews,
  sortType,
  handleStudyOverviews,
}: RecruitItemListProps) {
  const observableRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (observableRef.current === null) return;

    const intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(async entry => {
          if (entry.isIntersecting) {
            const { studyOverviews: overviews } = await getStudyOverviews(
              100,
              studyOverviews.at(-1)!.id,
              sortType,
            );
            if (overviews.length === 0) {
              intersectionObserver.unobserve(entry.target);
            } else {
              handleStudyOverviews(overviews);
            }
          }
        });
      },
      {
        threshold: 0.01,
      },
    );
    intersectionObserver.observe(observableRef.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [studyOverviews, handleStudyOverviews, sortType]);

  return (
    <ul className={styles.recruitArticlesContainer}>
      {studyOverviews.map(({ id, title, description, tags, announcement }) => (
        <li
          key={id}
          ref={node => {
            if (node && id === studyOverviews.at(-1)?.id) {
              observableRef.current = node;
            }
          }}
        >
          <RecruitItem.Container>
            <RecruitItem.Metric metric={announcement} />
            <RecruitItem.Header id={id} title={title} />
            <RecruitItem.Description id={id} description={description} />
            <RecruitItem.Tags tags={tags} />
          </RecruitItem.Container>
        </li>
      ))}
    </ul>
  );
}

export default RecruitItemList;
