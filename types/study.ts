export type SortBy = "최신순" | "추천순" | "인기순";

export type Tag = {
  name: string;
};

export type StudyDetail = {
  id: number;
  title: string;
  progressPeriod: string;
  recruitPeriod: string;
  recruitsNumber: string;
  location: string;
  progress: string;
  rules: string[];
  tags: Tag[];
  leader: {
    id: number;
    nickname: string;
    intro: string;
    profileUrl: string;
  };
};
