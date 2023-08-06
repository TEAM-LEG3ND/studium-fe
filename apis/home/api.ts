import { Study, StudyResponse } from "@/apis/home/types";

const createRecruitItem = (count: number): Study[] =>
  Array.from({ length: count }, (v, i) => i + 1).map(v => ({
    id: v,
    leaderId: 3,
    createdAt: "2023-07-27T14:11:37.609Z",
    updatedAt: "2023-07-27T14:11:55.526Z",
    intro: "string",
    rules: [""],
    location: "string",
    status: "RECRUITING",
    endDate: "2023-07-27T14:06:39.677Z",
    recruitEndDate: "2023-07-27T14:06:39.677Z",
    recruitStartDate: "2023-07-27T14:06:39.677Z",
    startDate: "2023-07-27T14:06:39.677Z",
    name: "string",
    tags: [
      { id: 1, label: "BE" },
      { id: 2, label: "Spring" },
    ],
    questionnaire: [{ id: 1, question: "" }],
    recruited: 0,
    recruiting: 0,
    studyTemplate: "string",
    title: "가나다라마바사",
  }));

const popularRecruitArticleData = createRecruitItem(12);

export const getStudyList = async (): Promise<StudyResponse> => {
  const res = await fetch(`https://api.server.d0lim.com/studium/api/v1/study`);
  if (!res.ok) {
    console.error("study response not ok");
    throw new Error("study response not ok");
  }
  const data = await res.json();

  return data;
};

export const getPopularStudyList = async () => {
  const data = await Promise.resolve(popularRecruitArticleData);
  return data;
};
