import { useEffect, useRef, useState } from "react";
import RecruitItem from "./RecruitItem";
import styles from "@/styles/pages/Home.module.sass";
import { RecruitArticle, SortBy } from "@/types/home";
import { factory } from "@/factories/homeFactory";

type RecruitItemListProps = {
  recruitArticles: RecruitArticle[];
  sortType: string;
  handleRecruitArticles: (articles: RecruitArticle[]) => void;
};

function RecruitItemList({
  recruitArticles,
  sortType,
  handleRecruitArticles,
}: RecruitItemListProps) {
  const observableRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (observableRef.current === null) return;

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            console.log("intersecting!!");
            const { recruit_articles: articles } =
              await factory.additionalArticle(
                100,
                recruitArticles.at(-1)?.id,
                sortType
              );
            if (articles.length === 0) {
              intersectionObserver.unobserve(entry.target);
            } else {
              handleRecruitArticles(articles);
            }
          }
        });
      },
      {
        threshold: 0.01,
      }
    );
    intersectionObserver.observe(observableRef.current);

    return () => intersectionObserver.disconnect();
  }, [recruitArticles, handleRecruitArticles, sortType]);

  return (
    <ul className={styles.recruit_articles_container}>
      {recruitArticles.map(({ id, title, description, tags, announcement }) => (
        <li
          key={id}
          ref={(node) => {
            if (node && id === recruitArticles.at(-1)?.id) {
              observableRef.current = node;
            }
          }}
        >
          <RecruitItem.Container>
            <RecruitItem.Metric metric={announcement} />
            <RecruitItem.Header title={title} />
            <RecruitItem.Description description={description} />
            <RecruitItem.Tags tags={tags} />
          </RecruitItem.Container>
        </li>
      ))}
    </ul>
  );
}

export default RecruitItemList;
