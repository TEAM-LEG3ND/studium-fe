import {
  OnFireStudyResponse,
  StudyResponse,
  StudyByIdResponse,
  StudyJournalListResponse,
  StudyNoticeResponse,
  studyResponseSchema,
  onFireStudyResponseSchema,
  studyByIdResponseSchema,
  studyJournalListResponseSchema,
  studyNoticeResponseSchema,
} from "@/apis/study/schema";
import appAxios from "../appAxios";
import { StudyForm } from "@/pages/study/new";

export const fetchStudyList = async (
  sort = "update",
): Promise<StudyResponse> => {
  const { data } = await appAxios().get("/study");
  const validatedData = studyResponseSchema.parse(data);

  return validatedData;
};

export const fetchOnFireStudyList = async (): Promise<OnFireStudyResponse> => {
  const { data } = await appAxios().get("/study/on-fire");
  const validatedData = onFireStudyResponseSchema.parse(data);

  return validatedData;
};

export const fetchStudyById = async (
  id: number,
): Promise<StudyByIdResponse> => {
  const { data } = await appAxios().get(`/study/${id}`);
  const validatedData = studyByIdResponseSchema.parse(data);

  return validatedData;
};

export const fetchStudyJournalList = async (
  id: number,
): Promise<StudyJournalListResponse> => {
  const { data } = await appAxios().get(`/study/${id}/journals`);
  const validatedData = studyJournalListResponseSchema.parse(data);

  return validatedData;
};

export const fetchStudyNotice = async (
  id: number,
): Promise<StudyNoticeResponse> => {
  const { data } = await appAxios().get(`/study/${id}/notices`);
  const validatedData = studyNoticeResponseSchema.parse(data);

  return validatedData;
};

export const postStudy = async (
  newStudy: StudyForm,
): Promise<StudyResponse> => {
  const res = await fetch(`https://api.server.d0lim.com/studium/api/v1/study`, {
    method: "POST",
    body: JSON.stringify(newStudy),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Fail to create new study");
  }
  const data = await res.json();

  return data;
};
