import { StudyOverview } from "@/types/study";
import Carousel from "../common/carousel/Carousel";
import PostBoard from "./PostBoard";
import RecruitItem from "./RecruitItem";

type Props = {
  studies: StudyOverview[];
};

function PopularStudyBoard({ studies }: Props) {
  return (
    <PostBoard title="현재 뜨는 스터디">
      <Carousel showSwiper>
        {studies.map(({ id, title, description, tags, announcement }) => (
          <Carousel.Item key={id}>
            <RecruitItem.Container>
              <RecruitItem.Metric metric={announcement} />
              <RecruitItem.Header id={id} title={title} />
              <RecruitItem.Description id={id} description={description} />
              <RecruitItem.Tags tags={tags} />
            </RecruitItem.Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </PostBoard>
  );
}

export default PopularStudyBoard;
