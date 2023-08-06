// 최초 홈 진입 통 API
// ${API_PATH}/home

export type HomeResponse = {
  popularRecruitArticles: HomeRecruitArticleResponse[];
} & RecruitArticlesResponse;

// 추가 게시글 요청
// ${API_PATH}/home/article?last={oldest_recent_article_id}&size={size}&sort={sortBy}
export type RecruitArticlesResponse = {
  recruitArticles: HomeRecruitArticleResponse[];
  lastRecruitArticleId: number;
};

export type HomeRecruitArticleResponse = {
  id: number;
  title: string;
  description: string;
  tags: { id: number; label: string }[];
  createdAt: Date;
  expiresAt: Date;
};

export type StudyResponse = Study[];

export type Study = {
  id: number;
  leaderId: number;
  createdAt: string;
  updatedAt: string;
  intro: string;
  rules: string[];
  location: string;
  status: string;
  endDate: string;
  recruitEndDate: string;
  recruitStartDate: string;
  startDate: string;
  name: string;
  tags: {
    id: number;
    label: string;
  }[];
  questionnaire: {
    id: number;
    question: string;
  }[];
  recruited: number;
  recruiting: number;
  studyTemplate: string;
  title: string;
};
