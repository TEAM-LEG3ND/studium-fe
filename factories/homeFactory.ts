import {
  getHomeResponseData,
  getRecruitArticlesResponseData,
} from "@/apis/homeApi";

export const getHomePageData = async () => {
  const {
    popular_recruit_articles: popularArticles,
    recruit_articles: articles,
  } = await getHomeResponseData();
  const resolvedPopularArticles = popularArticles.map(article => ({
    id: article.id,
    title: article.title,
    description: article.description,
    tags: article.tags,
    announcement: "마감일 2일 17시간 남음",
  }));
  const resolvedArticles = articles.map(article => ({
    id: article.id,
    title: article.title,
    description: article.description,
    tags: article.tags,
    announcement: "마감일 2일 17시간 남음",
  }));

  return {
    popular_recruit_articles: resolvedPopularArticles,
    recruit_articles: resolvedArticles,
  };
};

export const getRecruitArticles = async (
  size: number,
  lastArticleId: number,
  sort: string,
) => {
  const { recruit_articles: articles } = await getRecruitArticlesResponseData(
    size,
    lastArticleId,
    sort,
  );
  const resolvedArticles = articles.map(article => ({
    id: article.id,
    title: article.title,
    description: article.description,
    tags: article.tags,
    announcement: "마감일 2일 17시간 남음",
  }));

  return {
    recruit_articles: resolvedArticles,
  };
};
