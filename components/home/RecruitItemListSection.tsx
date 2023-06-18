import { useState } from "react";

import styles from "@/styles/pages/Home.module.sass";
import RecruitItemList from "@/components/home/RecruitItemList";
import { RecruitArticle, SortBy } from "@/types/home";
import { factory } from "@/factories/homeFactory";

type RecruitItemListSectionProps = {
  recruitArticles: RecruitArticle[];
};

function RecruitItemListSection({
  recruitArticles,
}: RecruitItemListSectionProps) {
  const sortTypes: SortBy[] = ["최신순", "추천순", "인기순"];
  const [sortType, setSortType] = useState("최신순");
  const [expanded, setExpanded] = useState(false);
  const [recruitItemList, setRecruitItemList] = useState(recruitArticles);

  const handleSortBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setExpanded((e) => !e);
  };

  const handleSelected = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setExpanded((e) => !e);
    setSortType(e.currentTarget.value);
    const articles = await factory.additionalArticle(
      100,
      0,
      e.currentTarget.value
    );
    setRecruitItemList(articles.recruit_articles);
  };

  const handleRecruitItemList = (articles: RecruitArticle[]) => {
    setRecruitItemList(recruitItemList.concat(articles));
  };

  return (
    <section className={styles.recommends_container}>
      <header className={styles.recommends_header}>
        <h2 className={styles.recommends_title}>
          {"당신의 스터디, Studium이 응원합니다."}
        </h2>
        <div className={styles.sort_wrapper}>
          <button
            onClick={handleSortBtn}
            value={sortType}
            className={styles.sort_btn}
          >
            {sortType}
          </button>
          {expanded ? (
            <div className={styles.sort_menu}>
              {sortTypes
                .filter((sort) => sort !== sortType)
                .map((sort, i) => (
                  <button key={i} value={sort} onClick={handleSelected}>
                    {sort}
                  </button>
                ))}
            </div>
          ) : null}
        </div>
      </header>
      <div>
        <RecruitItemList
          recruitArticles={recruitItemList}
          sortType={sortType}
          handleRecruitArticles={handleRecruitItemList}
        />
      </div>
    </section>
  );
}

export default RecruitItemListSection;
