import Head from "next/head";

import Carousel from "@/components/common/carousel/Carousel";
import RecruitItem from "@/components/home/RecruitItem";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { factory } from "@/factories/homeFactory";
import { HomeData } from "@/types/home";
import RecruitItemListSection from "@/components/home/RecruitItemListSection";

export const getServerSideProps: GetServerSideProps<{
  data: HomeData;
}> = async () => {
  const data = await factory.init();
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
<<<<<<< HEAD
      <section />
=======
      <section>
        <div className={styles.recommends_container}>
          <header>
            <h2 className={styles.recommends_title}>{`현재 뜨는 스터디`}</h2>
          </header>
          <div className={styles.recommends_content}>
            <Carousel showSwiper={true}>
              {data.popular_recruit_articles.map(
                ({ id, title, description, tags, announcement }) => (
                  <Carousel.Item key={id}>
                    <RecruitItem.Container>
                      <RecruitItem.Metric metric={announcement} />
                      <RecruitItem.Header title={title} />
                      <RecruitItem.Description description={description} />
                      <RecruitItem.Tags tags={tags} />
                    </RecruitItem.Container>
                  </Carousel.Item>
                )
              )}
            </Carousel>
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6711bab (Create popular recruit article list component with carousel in main page)
=======
      <section className={styles.recommends_container}>
        <header>
          <h2 className={styles.recommends_title}>
            {"당신의 스터디, Studium이 응원합니다."}
          </h2>
        </header>
        <div>
          <ul className={styles.recruit_articles_container}>
            {data.recruit_articles.map(
              ({ id, title, description, tags, metric }) => (
                <li key={id}>
                  <RecruitItem.Container>
                    <RecruitItem.Metric metric={metric} />
                    <RecruitItem.Header title={title} />
                    <RecruitItem.Description description={description} />
                    <RecruitItem.Tags tags={tags} />
                  </RecruitItem.Container>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
>>>>>>> a27d222 (Create recruit article list component with grid layout in main page)
=======
      <RecruitItemListSection recruitArticles={data.recruit_articles} />
>>>>>>> a8f812d (Apply infinite scroll to RecruitItemList component)
    </>
  );
}
