import { useState } from "react";
import styles from "@/styles/pages/Study.module.sass";
import { useNoticePatchMutation } from "@/queries/useNoticeMutation";
import { StudyNotice } from "@/controllers/study/types";

export type StudyNoticeProps = {
  studyId: number;
  notice: StudyNotice;
};

function StudyNoticeBox({ studyId, notice }: StudyNoticeProps) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(notice.content);
  const mutation = useNoticePatchMutation();

  const handleNoticeEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setEdit(true);
  };

  const handleNoticeSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setEdit(false);
    mutation.mutate({ id: notice.id, studyId, content: notice.content });
  };

  const handleNoticeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    setText(e.currentTarget.value);
  };

  return (
    <div className={styles.studyNotice}>
      <header>
        <h2>스터디 공지</h2>
        {edit === false ? (
          <button type="button" onClick={handleNoticeEdit}>
            수정
          </button>
        ) : (
          <button type="button" onClick={handleNoticeSubmit}>
            수정 완료
          </button>
        )}
      </header>
      <div className={styles.studyNoticeContent}>
        <textarea readOnly={!edit} onChange={handleNoticeInput}>
          {text}
        </textarea>
      </div>
    </div>
  );
}

export default StudyNoticeBox;
