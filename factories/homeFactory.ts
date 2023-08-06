import { getPopularStudyList, getStudyList } from "@/apis/home/api";
import { StudyOverview } from "@/types/study";

export type HomePage = {
  data: {
    privatePosts: {
      popularStudyPosts: StudyOverview[];
      myStudyPosts?: StudyOverview[];
    };
    studyPosts: StudyOverview[];
  };
};

export const getHomePageData = async (): Promise<HomePage> => {
  const [popularStudyList, studyList] = await Promise.all([
    getPopularStudyList(),
    getStudyList(),
  ]);
  const resolvedPopularOverviews = popularStudyList.map(study => ({
    id: study.id,
    title: study.title,
    description: study.intro,
    remainTime: "마감일 2일 17시간 남음",
    tags: [
      { id: 1, label: "BE" },
      { id: 2, label: "Spring" },
    ],
  }));
  const resolvedOverviews = studyList.map(study => ({
    id: study.id,
    title: study.title,
    description: study.intro,
    remainTime: "마감일 2일 17시간 남음",
    tags: [
      { id: 1, label: "BE" },
      { id: 2, label: "Spring" },
    ],
  }));

  return {
    data: {
      privatePosts: {
        popularStudyPosts: resolvedPopularOverviews,
      },
      studyPosts: resolvedOverviews,
    },
  };
};

export const getStudyOverviews = async (
  size: number,
  lastOverviewId = 0,
  sort = "최신순",
) => {
  const studyList = await getStudyList();
  const resolvedOverviews = studyList.map(study => ({
    id: study.id,
    title: study.title,
    description: study.intro,
    remainTime: "마감일 2일 17시간 남음",
    tags: [
      { id: 1, label: "BE" },
      { id: 2, label: "Spring" },
    ],
  }));

  return resolvedOverviews;
};
