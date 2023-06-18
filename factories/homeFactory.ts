import {
  getHomeResponseData,
  getRecruitArticlesResponseData,
} from "@/apis/homeApi";
import { HomeData, RecruitArticles } from "@/types/home";

export const factory = {
  init: async (): Promise<HomeData> => {
    const {
      popular_recruit_articles: popularArticles,
      recruit_articles: articles,
      last_recruit_article_id: lastArticleId,
    } = await getHomeResponseData();
    const resolvedPopularArticles = popularArticles.map((article) => ({
      id: article.id,
      title: article.title,
      description: article.description,
      tags: article.tags,
      announcement: "마감일 2일 17시간 남음",
    }));
    const resolvedArticles = articles.map((article) => ({
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
  },

  additionalArticle: async (
    size: number = 100,
    lastArticleId: number = 0,
    sort: string
  ): Promise<RecruitArticles> => {
    const { recruit_articles: articles, last_recruit_article_id } =
      await getRecruitArticlesResponseData(size, lastArticleId, sort);
    const resolvedArticles = articles.map((article) => ({
      id: article.id,
      title: article.title,
      description: article.description,
      tags: article.tags,
      announcement: "마감일 2일 17시간 남음",
    }));

    return {
      recruit_articles: resolvedArticles,
    };
  },
};
