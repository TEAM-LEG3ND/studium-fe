import Head from "next/head";

import { getHomePageData } from "@/controllers/home/controller";
import StudyPostBoard from "@/components/home/StudyPostBoard";
import PrivatePostBoardList from "@/components/home/PrivatePostBoardList";
import { InferGetServerSidePropsType } from "next";
import appGetServerSideProps from "@/apis/appGetServerSideProps";

export const getServerSideProps = appGetServerSideProps(async () => {
  const { data } = await getHomePageData();
  return { props: { data } };
});

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
      <PrivatePostBoardList posts={data.privatePosts} />
      <StudyPostBoard studies={data.studyPosts} />
    </>
  );
}
