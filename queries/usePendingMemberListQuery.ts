import { getPendingMemberList } from "@/apis/study/api";
import getUserById from "@/apis/user/api";
import { useQueries, useQuery } from "@tanstack/react-query";

function usePendingMemberListQuery(studyId: number) {
  const { data } = useQuery({
    queryFn: () => getPendingMemberList(studyId),
  });

  const pendingMemberList = data ?? [];

  const users = useQueries({
    queries: pendingMemberList.map(member => ({
      queryKey: ["user", member.userId],
      queryFn: () => getUserById(member.userId),
      enabled: !!member.userId,
    })),
  });

  const resolvedPendingMemberList = pendingMemberList.map((member, i) => ({
    id: member.id,
    title: `${users[i].data?.nickname}님의 지원서`,
  }));

  return resolvedPendingMemberList;
}

export default usePendingMemberListQuery;
