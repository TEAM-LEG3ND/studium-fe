import { useEffect, useRef, useState } from "react";

import styles from "@/styles/pages/Home.module.sass";
import { StudyOverview } from "@/types/study";
import { getStudyOverviews } from "@/factories/homeFactory";
import { generateID } from "@/hooks/useId";
import PostBoard from "./PostBoard";
import Dropdown, { DropdownItem } from "../common/Dropdown";
import Button from "../common/Button";
import StudyOverviewCard from "./StudyOverviewCard";
import Grid from "../common/Grid";

type Props = {
  studies: StudyOverview[];
};

function StudyPostBoard({ studies }: Props) {
  const observableRef = useRef<HTMLElement | null>(null);
  const [studyList, setStudyList] = useState(studies);
  const [studySort, setStudySort] = useState("최신순");
  const studySortItems: DropdownItem[] = [
    {
      label: "최신순",
      value: "최신순",
    },
    {
      label: "추천순",
      value: "추천순",
    },
    {
      label: "인기순",
      value: "인기순",
    },
    {
      label: "북마크순",
      value: "북마크순",
    },
  ];

  const onChangeSort = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e === undefined || studySort === e.currentTarget.value) return;

    setStudySort(e.currentTarget.value);
    const newStudies = await getStudyOverviews(100, 0, e.currentTarget.value);
    setStudyList(newStudies);
  };

  useEffect(() => {
    if (observableRef.current === null) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(async entry => {
          if (entry.isIntersecting) {
            const newStudies = await getStudyOverviews(
              100,
              studyList.at(-1)?.id,
              studySort,
            );
            if (newStudies.length === 0) {
              observer.unobserve(entry.target);
            } else {
              setStudyList(studyList.concat(newStudies));
            }
          }
        });
      },
      {
        threshold: 0.01,
      },
    );
    observer.observe(observableRef.current);

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, [studyList, studySort]);

  return (
    <section className={styles.recommendsContainer}>
      <PostBoard
        title="당신의 스터디, 스터디움이 응원합니다."
        addon={
          <Dropdown
            trigger={<Button className={styles.sortButton}>{studySort}</Button>}
            items={studySortItems}
            selected={{ label: studySort, value: studySort }}
            onChange={onChangeSort}
          />
        }
      >
        <Grid>
          {studyList.map(({ id, title, description, remainTime, tags }) => (
            <Grid.Item
              key={generateID("home-study-list")}
              ref={node => {
                if (node && id === studyList.at(-1)?.id) {
                  observableRef.current = node;
                }
              }}
            >
              <StudyOverviewCard
                id={id}
                title={title}
                description={description}
                remainTime={remainTime}
                tags={tags}
              />
            </Grid.Item>
          ))}
        </Grid>
      </PostBoard>
    </section>
  );
}

export default StudyPostBoard;
