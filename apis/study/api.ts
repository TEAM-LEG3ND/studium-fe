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
  noticeMutationRequestSchema,
  pendingMemberListResponseSchema,
  PendingMemberListResponse,
} from "@/apis/study/schema";
import appAxios from "../appAxios";

export const fetchStudyList = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  const { data } = await appAxios().get(`/study/${id}/notice`);
  const validatedData = studyNoticeResponseSchema.parse(data);

  return validatedData;
};

export const postNotice = async (
  studyId: number,
  content: string,
): Promise<StudyNoticeResponse> => {
  const body = {
    studyId,
    content,
  };
  const validatedBody = noticeMutationRequestSchema.parse(body);
  const { data } = await appAxios().post(`/notice`, validatedBody);

  return data;
};

export const patchNotice = async (
  id: number,
  studyId: number,
  content: string,
): Promise<StudyNoticeResponse> => {
  const body = {
    studyId,
    content,
  };
  const validatedBody = noticeMutationRequestSchema.parse(body);
  const { data } = await appAxios().patch(`/notice/${id}`, validatedBody);

  return data;
};

export const getPendingMemberList = async (
  studyId: number,
): Promise<PendingMemberListResponse> => {
  const { data } = await appAxios().get(`/member/study/pending/${studyId}`);
  const validatedData = pendingMemberListResponseSchema.parse(data);

  return validatedData;
};
