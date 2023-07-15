import { useState } from "react";

import styles from "@/styles/pages/Home.module.sass";
import StudyPostList from "@/components/home/StudyPostList";
import { StudyOverview, SortBy } from "@/types/study";
import { getStudyOverviews } from "@/factories/homeFactory";
import PostBoard from "./PostBoard";

type Props = {
  studies: StudyOverview[];
};

function StudyPostBoard({ studies }: Props) {
  const sortTypes: SortBy[] = ["최신순", "추천순", "인기순"];
  const [sortType, setSortType] = useState("최신순");
  const [expanded, setExpanded] = useState(false);
  const [recruitItemList, setRecruitItemList] = useState(studies);

  const handleSortBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const handleSelected = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setExpanded(!expanded);
    setSortType(e.currentTarget.value);
    const overviews = await getStudyOverviews(100, 0, e.currentTarget.value);
    setRecruitItemList(overviews.studyPosts);
  };

  const handleRecruitItemList = (articles: StudyOverview[]) => {
    setRecruitItemList(recruitItemList.concat(articles));
  };

  return (
    <section className={styles.recommendsContainer}>
      <PostBoard
        title="당신의 스터디, 스터디움이 응원합니다."
        addon={
          <div className={styles.sortWrapper}>
            <button
              type="button"
              onClick={handleSortBtn}
              value={sortType}
              className={styles.sortBtn}
            >
              {sortType}
            </button>
            {expanded ? (
              <div className={styles.sortMenu}>
                {sortTypes
                  .filter(sort => sort !== sortType)
                  .map((sort, i) => (
                    <button
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      type="button"
                      value={sort}
                      onClick={handleSelected}
                    >
                      {sort}
                    </button>
                  ))}
              </div>
            ) : null}
          </div>
        }
      >
        <StudyPostList
          studyOverviews={recruitItemList}
          sortType={sortType}
          handleStudyOverviews={handleRecruitItemList}
        />
      </PostBoard>
    </section>
  );
}

export default StudyPostBoard;
