import { StudyOverview } from "@/types/study";
import PopularStudyBoard from "./PopularPostBoard.";

type Props = {
  posts: {
    popularStudies: StudyOverview[];
    myStudies?: StudyOverview[];
  };
};

function PrivatePostBoardList({ posts }: Props) {
  return (
    <section>
      <PopularStudyBoard studies={posts.popularStudies} />
    </section>
  );
}

export default PrivatePostBoardList;
