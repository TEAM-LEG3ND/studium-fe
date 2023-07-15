import { useState } from "react";

import styles from "@/styles/pages/Home.module.sass";
import RecruitItemList from "@/components/home/RecruitItemList";
import { StudyOverview, SortBy } from "@/types/study";
import { getStudyOverviews } from "@/factories/homeFactory";

type RecruitItemListSectionProps = {
  studyOverviews: StudyOverview[];
};

function RecruitItemListSection({
  studyOverviews,
}: RecruitItemListSectionProps) {
  const sortTypes: SortBy[] = ["최신순", "추천순", "인기순"];
  const [sortType, setSortType] = useState("최신순");
  const [expanded, setExpanded] = useState(false);
  const [recruitItemList, setRecruitItemList] = useState(studyOverviews);

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
      <header className={styles.recommendsHeader}>
        <h2 className={styles.recommendsTitle}>
          당신의 스터디, Studium이 응원합니다.
        </h2>
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
      </header>
      <div>
        <RecruitItemList
          studyOverviews={recruitItemList}
          sortType={sortType}
          handleStudyOverviews={handleRecruitItemList}
        />
      </div>
    </section>
  );
}

export default RecruitItemListSection;
