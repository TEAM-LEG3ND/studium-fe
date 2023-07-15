import { useEffect, useRef } from "react";
import styles from "@/styles/pages/Home.module.sass";
import { StudyOverview } from "@/types/study";
import { getStudyOverviews } from "@/factories/homeFactory";
import StudyOverviewCard from "./StudyOverviewCard";

type Props = {
  studyOverviews: StudyOverview[];
  sortType: string;
  handleStudyOverviews: (overviews: StudyOverview[]) => void;
};

function StudyPostList({
  studyOverviews,
  sortType,
  handleStudyOverviews,
}: Props) {
  const observableRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (observableRef.current === null) return;

    const intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(async entry => {
          if (entry.isIntersecting) {
            const { studyPosts: overviews } = await getStudyOverviews(
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
      {studyOverviews.map(({ id, title, description, tags, remainTime }) => (
        <li
          key={id}
          ref={node => {
            if (node && id === studyOverviews.at(-1)?.id) {
              observableRef.current = node;
            }
          }}
        >
          <StudyOverviewCard
            id={id}
            title={title}
            description={description}
            tags={tags}
            remainTime={remainTime}
          />
        </li>
      ))}
    </ul>
  );
}

export default StudyPostList;
