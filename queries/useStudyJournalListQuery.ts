import { fetchStudyJournalList } from "@/apis/study/api";
import getUserById from "@/apis/user/api";
import { convertDateToFormat } from "@/utils/util-func";
import { useQueries, useQuery } from "@tanstack/react-query";

function useStudyJournalListQuery(id: number) {
  const { data } = useQuery({
    queryKey: [id, "journalList"],
    queryFn: () => fetchStudyJournalList(id),
  });

  const journalList = data ?? [];

  const users = useQueries({
    queries: journalList.map(journal => ({
      queryKey: ["user", journal.authorId],
      queryFn: () => getUserById(journal.authorId),
      enabled: !!journal.authorId,
    })),
  });

  const resolvedJournalList = journalList.map((journal, i) => ({
    id: journal.id,
    title: journal.title,
    content: journal.content,
    author: users[i].data?.nickname ?? "",
    updatedAt: convertDateToFormat(new Date(journal.updatedAt), "yyyy.mm.dd"),
  }));

  return { journalList: resolvedJournalList };
}

export default useStudyJournalListQuery;
