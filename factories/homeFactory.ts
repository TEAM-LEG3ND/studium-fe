import {
  getHomeResponseData,
  getRecruitArticlesResponseData,
} from "@/apis/homeApi";

export const getHomePageData = async () => {
  const { popularRecruitArticles: popularArticles, recruitArticles: articles } =
    await getHomeResponseData();
  const resolvedPopularOverviews = popularArticles.map(article => ({
    id: article.id,
    title: article.title,
    description: article.description,
    tags: article.tags,
    announcement: "마감일 2일 17시간 남음",
  }));
  const resolvedOverviews = articles.map(article => ({
    id: article.id,
    title: article.title,
    description: article.description,
    tags: article.tags,
    announcement: "마감일 2일 17시간 남음",
  }));

  return {
    popularStudyOverviews: resolvedPopularOverviews,
    studyOverviews: resolvedOverviews,
  };
};

export const getStudyOverviews = async (
  size: number,
  lastOverviewId: number,
  sort: string,
) => {
  const { recruitArticles: articles } = await getRecruitArticlesResponseData(
    size,
    lastOverviewId,
    sort,
  );
  const resolvedOverviews = articles.map(article => ({
    id: article.id,
    title: article.title,
    description: article.description,
    tags: article.tags,
    announcement: "마감일 2일 17시간 남음",
  }));

  return {
    studyOverviews: resolvedOverviews,
  };
};
