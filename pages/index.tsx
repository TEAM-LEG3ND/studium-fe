import Head from "next/head";
import styles from "@/styles/pages/Home.module.sass";

import Carousel from "@/components/common/carousel/Carousel";
import RecruitItem from "@/components/home/RecruitItem";

export type RecruitItem = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  metric: string;
};

export type HomeData = {
  popular_recruit_articles: RecruitItem[];
  recruit_articles: RecruitItem[];
  last_recruit_article_id: number;
};

const createRecruitItem = (count: number) =>
  Array.from({ length: count }, (v, i) => i + 1).map((v) => ({
    id: v,
    title: `스프링 기초 스터디 ${v}`,
    description:
      "스프링 6 버전에서 새로 도입된 개념과 스프링 프레임워크의 핵심 요소들을 공부합니다.",
    tags: ["BE", "Spring"],
    metric: "마감일 2일 17시간 남음",
  }));

export default function Home() {
  const recruitArticleListData = createRecruitItem(100);
  const popularRecruitArticleData = createRecruitItem(12);

  const data: HomeData = {
    popular_recruit_articles: popularRecruitArticleData,
    recruit_articles: recruitArticleListData,
    last_recruit_article_id: 100,
  };
  return (
    <>
      <Head>
        <title>Studium Home</title>

        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="User interactive study platform" />
        <meta name="theme-color" content="" />
      </Head>
      <section></section>
    </>
  );
}
