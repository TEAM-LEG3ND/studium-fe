import { rest } from "msw";
import { recruitArticles, popularRecruitArticles } from "../data/article";
import { deepSlice } from "@/utils/util-func";

export const homeHandlers = [
  // 홈페이지 api
  rest.get("https://api.server.d0lim.com/studium/v1/home", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        popular_recruit_articles: popularRecruitArticles,
        recruit_articles: deepSlice(recruitArticles, 0, 100),
        last_recruit_article_id: 100,
      })
    );
  }),

  // 추가 게시글 요청
  rest.get(
    "https://api.server.d0lim.com/studium/v1/home/article",
    (req, res, ctx) => {
      const size = Number(req.url.searchParams.get("size"));
      const sortType = req.url.searchParams.get("sort");
      const oldestRecentArticleId = Number(
        req.url.searchParams.get("oldest_recent_article_id")
      );
      return res(
        ctx.status(200),
        ctx.set("Access-Control-Allow-Origin", "*"),
        ctx.json({
          recruit_articles: deepSlice(
            recruitArticles,
            oldestRecentArticleId,
            size
          ),
          last_recruit_article_id: oldestRecentArticleId + size,
        })
      );
    }
  ),

  // 구인 글 상세 정보 요청
  rest.get(
    "https://api.server.d0lim.com/studium/v1/recruit/{id}",
    (req, res, ctx) => {}
  ),
];
