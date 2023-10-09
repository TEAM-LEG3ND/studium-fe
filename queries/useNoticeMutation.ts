import { patchNotice, postNotice } from "@/apis/study/api";
import { useMutation } from "@tanstack/react-query";

export function useNoticePostMutation() {
  const mutation = useMutation({
    mutationFn: ({ studyId, content }: { studyId: number; content: string }) =>
      postNotice(studyId, content),
  });

  return mutation;
}

export function useNoticePatchMutation() {
  const mutation = useMutation({
    mutationFn: ({
      id,
      studyId,
      content,
    }: {
      id: number;
      studyId: number;
      content: string;
    }) => patchNotice(id, studyId, content),
  });

  return mutation;
}
