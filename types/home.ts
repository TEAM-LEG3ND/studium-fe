// 최초 홈 진입 통 API
// https://api.server.d0lim.com/studium/v1/home

export type HomeResponse = {
  polular_recruit_articles: HomeRecruitArticleResponse[];
} & RecruitArticlesResponse;

// 추가 게시글 요청
// https://api.server.d0lim.com/studium/v1/home/article?last={oldest_recent_article_id}&size={size}&sort={sortBy}
export type RecruitArticlesResponse = {
  recruit_articles: HomeRecruitArticleResponse[];
  last_recruit_article_id: number;
};

export type HomeRecruitArticleResponse = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  created_at: Date;
  expires_at: Date;
};

// https://api.server.d0lim.com/studium/v1/recruit/{id}
