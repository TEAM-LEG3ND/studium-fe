// 최초 홈 화면 뷰 데이터
export type HomePage = {
  popularStudyOverviews: StudyOverview[];
} & StudyOverviews;

// 추가 게시글 데이터
export type StudyOverviews = {
  studyOverviews: StudyOverview[];
};

// 홈 화면 게시글
export type StudyOverview = {
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