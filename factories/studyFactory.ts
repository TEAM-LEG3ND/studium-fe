export type Study = {
  id: string;
  title: string;
  tags: {
    id: string;
    label: string;
  }[];
  leader: {
    uid: string;
    name: string;
    profileImage: string;
    contact: string;
    intro: string;
  };
  process: string[];
  rules: string[];
  processDuration: string;
  recruitDuration: string;
  recruiting: string;
  location: string;
  questionnaire: {
    id: string;
    question: string;
  }[];
};

const dummyStudyVo: Study = {
  id: "1",
  title: "23년 토익 스터디(3회차)",
  tags: [
    {
      id: "1",
      label: "Label",
    },
    {
      id: "2",
      label: "Label",
    },
    {
      id: "3",
      label: "Label",
    },
  ],
  leader: {
    uid: "1",
    name: "Olivia Rhye",
    profileImage: "",
    contact: "olivia@untitledui.com",
    intro: "15년차 토익 강사. 수능 영어 1등급(쉽다)\n쉬운 문제만 가르칩니다.",
  },
  process: [
    "23년 3회차 토익 스터디(4~5월)",
    "매주 3회 온라인으로 진행(1시간)",
    "교재 문제 풀이 후 어려웠던 부분이나 설명하고 싶은 부분 발표",
    "불성실한 참여 시 경고, 3회 누적 시 추방",
  ],
  rules: ["매너 없는 분 사절", "불성실한 참여 시 경고, 3회 누적 시 추방"],
  processDuration: "2023.04.02 ~ 2023.05.07",
  recruitDuration: "2023.04.01 13:00:00까지(5시간 남았어요!!)",
  recruiting: "3 / 5",
  location: "온라인(비대면)",
  questionnaire: [
    { id: "1", question: "Q.스터디에 지원한 동기가 무엇인가요?" },
    { id: "2", question: "Q.최근에 토익 스터디를 참여해보신 경험이 있나요?" },
    {
      id: "3",
      question: "Q.토익에 응시했던 경험이 있다면 시험 점수를 적어주세요.",
    },
    {
      id: "4",
      question: "Q.지원자 분의 영어 레벨을 몇이라고 생각하시나요?(1~5까지)",
    },
    { id: "5", question: "Q.각오 한 말씀 들려주세요!" },
  ],
};

export default async function getStudyApplyPage(id: string): Promise<Study> {
  console.log(id);
  const apis = [Promise.resolve(dummyStudyVo)] as const;
  const dataList = await Promise.all(apis);

  // 응답 값 조합 및 변형
  const data = dataList[0];
  // --------------------

  return data;
}
