import { HomeRecruitArticleResponse } from "@/types/home";
import { cloneObjectForNTimes } from "@/utils/util-func";

const articleMock = (id: number) =>
  ({
    id: id,
    title: `스프링 기초 스터디 ${id}`,
    description:
      "스프링 6 버전에서 새로 도입된 개념과 스프링 프레임워크의 핵심 요소들을 공부합니다.",
    tags: ["BE", "Spring"],
    created_at: new Date("2023-06-08T03:24:00"),
    expires_at: new Date("2023-06-15T03:24:00"),
  } satisfies HomeRecruitArticleResponse);

export const recruitArticles = cloneObjectForNTimes<HomeRecruitArticleResponse>(
  articleMock,
  500
);

export const popularRecruitArticles =
  cloneObjectForNTimes<HomeRecruitArticleResponse>(articleMock, 12);
