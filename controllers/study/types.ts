import { Tag } from "@/types/study";

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

export type StudyApply = StudyDetail & {
  questions: { id: number; text: string }[];
};
