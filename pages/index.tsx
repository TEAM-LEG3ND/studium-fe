import Head from "next/head";
import styles from "@/styles/pages/Home.module.sass";

import Carousel from "@/components/common/carousel/Carousel";
import RecruitItem from "@/components/home/RecruitItem";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getHomePageData } from "@/factories/homeFactory";
import { HomePage } from "@/types/study";
import RecruitItemListSection from "@/components/home/RecruitItemListSection";

export const getServerSideProps: GetServerSideProps<{
  data: HomePage;
}> = async () => {
  const data = await getHomePageData();
  return { props: { data } };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Studium Home</title>

        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="User interactive study platform" />
        <meta name="theme-color" content="" />
      </Head>
      <section>
        <div className={styles.recommendsContainer}>
          <header>
            <h2 className={styles.recommendsTitle}>현재 뜨는 스터디</h2>
          </header>
          <div className={styles.recommendsContent}>
            <Carousel showSwiper>
              {data.popularStudyOverviews.map(
                ({ id, title, description, tags, announcement }) => (
                  <Carousel.Item key={id}>
                    <RecruitItem.Container>
                      <RecruitItem.Metric metric={announcement} />
                      <RecruitItem.Header id={id} title={title} />
                      <RecruitItem.Description
                        id={id}
                        description={description}
                      />
                      <RecruitItem.Tags tags={tags} />
                    </RecruitItem.Container>
                  </Carousel.Item>
                ),
              )}
            </Carousel>
          </div>
        </div>
      </section>
      <RecruitItemListSection studyOverviews={data.studyOverviews} />
    </>
  );
}
