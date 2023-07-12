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
  tags: Tag[];
  createdAt: Date;
  expiresAt: Date;
};

// https://api.server.d0lim.com/studium/v1/recruit/{id}

// 최초 홈 화면 뷰 데이터
export type HomeData = {
  popularRecruitArticles: RecruitArticle[];
} & RecruitArticles;

// 추가 게시글 데이터
export type RecruitArticles = {
  recruitArticles: RecruitArticle[];
};

// 홈 화면 게시글
export type RecruitArticle = {
  id: number;
  title: string;
  description: string;
  tags: Tag[];
  announcement: string;
};

export type SortBy = "최신순" | "추천순" | "인기순";

export type Tag = {
  id: number;
  name: string;
};
