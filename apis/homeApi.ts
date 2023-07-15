// import fetchData from "@/utils/util-func";
// import studium from "./paths";

// 최초 홈 진입 통 API
// https://api.server.d0lim.com/studium/v1/home

export type HomeResponse = {
  popularRecruitArticles: HomeRecruitArticleResponse[];
} & RecruitArticlesResponse;

// 추가 게시글 요청
// https://api.server.d0lim.com/studium/v1/home/article?last={oldest_recent_article_id}&size={size}&sort={sortBy}
export type RecruitArticlesResponse = {
  recruitArticles: HomeRecruitArticleResponse[];
  lastRecruitArticleId: number;
};

type HomeRecruitArticleResponse = {
  id: number;
  title: string;
  description: string;
  tags: { id: number; label: string }[];
  createdAt: Date;
  expiresAt: Date;
};

// https://api.server.d0lim.com/studium/v1/recruit/{id}

const createRecruitItem = (count: number) =>
  Array.from({ length: count }, (v, i) => i + 1).map(v => ({
    id: v,
    title: `스프링 기초 스터디 ${v}`,
    description:
      "스프링 6 버전에서 새로 도입된 개념과 스프링 프레임워크의 핵심 요소들을 공부합니다.",
    tags: [
      {
        id: 1,
        label: "BE",
      },
      {
        id: 2,
        label: "Spring",
      },
    ],
    createdAt: new Date(),
    expiresAt: new Date(),
  }));

const recruitArticleListData = createRecruitItem(500);
const popularRecruitArticleData = createRecruitItem(12);

export const getHomeResponseData = async (): Promise<HomeResponse> => {
  // const homeData = await fetchData(studium.home.base());
  const homeData = {
    popularRecruitArticles: popularRecruitArticleData,
    recruitArticles: recruitArticleListData.slice(0, 100),
    lastRecruitArticleId: 100,
  };
  return homeData;
};

export const getRecruitArticlesResponseData = async (
  size: number,
  lastArticleId: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sort: string,
): Promise<RecruitArticlesResponse> => {
  // const articlesData = await fetchData(
  //   studium.home.articles(size, lastArticleId, sort)
  // );

  const articlesData = {
    recruitArticles: recruitArticleListData.slice(
      lastArticleId,
      lastArticleId + size,
    ),
    lastRecruitArticleId: lastArticleId + size,
  };
  return articlesData;
};
