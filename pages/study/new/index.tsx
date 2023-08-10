import { useState, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/pages/StudyNew.module.sass";
import TagInput from "@/components/common/TagInput";
import { useRouter } from "next/router";

// TODO: 입력값 validation 추가 .. error message 어떻게 보여줄지
// alert, confirm 써놓은거 Modal로 대체
// TODO: 전송버튼 동작 API 연결

export interface StudyForm {
  name: string;
  intro: string;
  tags: Array<string>;
  studyTemplate: null;
  rules: Array<string>;
  startDate: string;
  endDate: string;
  recruitStartDate: string;
  recruitEndDate: string;
  recruiting: number;
  studyPlace: "online" | "offline";
  offlinePlace?: string;
  questionnaires: Array<string>;
} // TODO: 백엔드랑 상의 후 네이밍, 타입 재설정 필요

const todayDateTime = new Date().toISOString().slice(0, -8);
const initialStudyForm: StudyForm = {
  name: "",
  intro: "",
  tags: [],
  studyTemplate: null,
  rules: [""],
  startDate: todayDateTime,
  endDate: todayDateTime,
  recruitStartDate: todayDateTime,
  recruitEndDate: todayDateTime,
  recruiting: 0,
  studyPlace: "online",
  questionnaires: [""],
};

export default function StudyNew() {
  const [studyForm, setStudyForm] = useState<StudyForm>(initialStudyForm);
  const router = useRouter();

  function handleAddRuleBox() {
    if (studyForm.rules.length < 5) {
      setStudyForm(studyForm => ({
        ...studyForm,
        rules: [...studyForm.rules, ""],
      }));
    }
  }

  function handleChangeRule(index: number, rule: string) {
    setStudyForm(studyForm => ({
      ...studyForm,
      rules: [
        ...studyForm.rules.slice(0, index),
        rule,
        ...studyForm.rules.slice(index + 1),
      ],
    }));
  }

  function deleteRuleInput(index: number) {
    console.log(index);
    if (studyForm.rules[index]) {
      const ok = confirm("작성 중인 규칙이 삭제됩니다.");
      if (!ok) {
        return;
      }
    }

    setStudyForm(studyForm => ({
      ...studyForm,
      rules: [
        ...studyForm.rules.slice(0, index),
        ...studyForm.rules.slice(index + 1),
      ],
    }));
  }

  function handleAddQuestionBox() {
    if (studyForm.questionnaires.length < 5) {
      setStudyForm(studyForm => ({
        ...studyForm,
        questionnaires: [...studyForm.questionnaires, ""],
      }));
    }
  }

  function handleChangeQuestion(index: number, question: string) {
    setStudyForm(studyForm => ({
      ...studyForm,
      questionnaires: [
        ...studyForm.questionnaires.slice(0, index),
        question,
        ...studyForm.questionnaires.slice(index + 1),
      ],
    }));
  }

  function deleteQuestionInput(index: number) {
    if (studyForm.questionnaires[index]) {
      const ok = confirm("작성 중인 질문이 삭제됩니다.");
      if (!ok) {
        return;
      }
    }

    setStudyForm(studyForm => ({
      ...studyForm,
      questionnaires: [
        ...studyForm.questionnaires.slice(0, index),
        ...studyForm.questionnaires.slice(index + 1),
      ],
    }));
  }

  function handleChangeTags(newTagList: Array<string>) {
    setStudyForm(studyForm => ({
      ...studyForm,
      tags: newTagList,
    }));
  }

  function submitStudyForm() {
    console.log(studyForm);
  }

  function goBack() {
    router.back();
  }

  const startDateInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <button className={styles.submitButton} onClick={submitStudyForm}>
          지원하기
        </button>
        <button onClick={goBack}>
          <Image
            src={`https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/delete-icon.svg`}
            alt="close_icon"
            width={24}
            height={24}
            aria-hidden
          />
        </button>
      </div>
      <div className={styles.titleContainer}>스터디 첫 걸음</div>
      <div className={styles.formContainer}>
        <div>
          이름
          <input
            type="text"
            className={styles.studyInput}
            onChange={e =>
              setStudyForm(studyForm => ({
                ...studyForm,
                name: e.target.value,
              }))
            }
            placeholder="스터디의 이름을 적어주세요"
          />
        </div>
        <div>
          한 줄 소개
          <input
            type="text"
            className={styles.studyInput}
            onChange={e =>
              setStudyForm(studyForm => ({
                ...studyForm,
                intro: e.target.value,
              }))
            }
            placeholder="스터디를 가장 잘 표현할 수 있는 문장을 한 줄로 소개해주세요"
          />
        </div>
        <div>
          <div className={styles.withConstraintForm}>
            <div>태그</div>
            <div className={styles.maxCountText}>(최대 5개)</div>
          </div>
          <div style={{ width: "100%" }}>
            <TagInput
              tagList={studyForm.tags}
              maxCount={5}
              onChangeTags={handleChangeTags}
            />
          </div>
        </div>
        <div>
          스터디 진행 방식
          <textarea
            className={styles.template}
            rows={10}
            placeholder="스터디 진행 방식을 입력해주세요."
          />
        </div>
        <div>
          <div className={styles.withConstraintForm}>
            <div>진행 규칙</div>
            <div className={styles.maxCountText}>(최대 5개)</div>
          </div>
          {studyForm.rules.map((rule, index) => (
            <div key={index} className={styles.deletableInputWrap}>
              <input
                key={index}
                className={styles.studyInput}
                type="text"
                value={rule}
                onChange={e => handleChangeRule(index, e.target.value)}
                placeholder="스터디 진행에 필요한 규칙들을 작성해주세요"
              />
              {index !== 0 && (
                <button
                  key={index}
                  className={styles.deleteInputButton}
                  onClick={() => deleteRuleInput(index)}
                >
                  [—]
                </button>
              )}
            </div>
          ))}
          {studyForm.rules.length < 5 && (
            <button className={styles.addInputBox} onClick={handleAddRuleBox}>
              +
            </button>
          )}
        </div>
        <div>
          모집 기간
          <div className={styles.dateRangeContainer}>
            <input
              type="datetime-local"
              id="studyForm-recruit-start"
              name="studyForm-recruit-start"
              value={studyForm.recruitStartDate}
              onChange={e =>
                setStudyForm({
                  ...studyForm,
                  recruitStartDate: e.target.value,
                })
              }
              onClick={e => e.currentTarget.showPicker()}
              min={todayDateTime}
              max="2030-01-01T00:00"
            />
            -
            <input
              type="datetime-local"
              id="studyForm-recruit-end"
              name="studyForm-recruit-end"
              value={studyForm.recruitEndDate}
              onChange={e =>
                setStudyForm({
                  ...studyForm,
                  recruitEndDate: e.target.value,
                })
              }
              onClick={e => e.currentTarget.showPicker()}
              min={todayDateTime}
              max="2030-01-01T00:00"
            />
          </div>
        </div>
        <div>
          진행 기간
          <div className={styles.dateRangeContainer}>
            <input
              ref={startDateInputRef}
              type="datetime-local"
              id="studyForm-study-start"
              name="studyForm-study-start"
              value={studyForm.startDate}
              onChange={e =>
                setStudyForm({
                  ...studyForm,
                  startDate: e.target.value,
                })
              }
              onClick={e => e.currentTarget.showPicker()}
              min={todayDateTime}
              max="2030-01-01T00:00"
            />
            -
            <input
              type="datetime-local"
              id="studyForm-study-end"
              name="studyForm-study-end"
              value={studyForm.endDate}
              onChange={e =>
                setStudyForm({
                  ...studyForm,
                  endDate: e.target.value,
                })
              }
              onClick={e => e.currentTarget.showPicker()}
              min={todayDateTime}
              max="2030-01-01T00:00"
            />
          </div>
        </div>
        <div className={styles.columnFlexForm}>
          <div className={styles.recruitingForm}>
            모집 인원
            <input
              type="number"
              className={styles.studyInput}
              onChange={e =>
                setStudyForm(studyForm => ({
                  ...studyForm,
                  recruiting: Number(e.target.value),
                }))
              }
              placeholder="최대 정원을 입력해주세요"
            />
          </div>
          <div className={styles.studyPlaceForm}>
            진행 장소
            <div className={styles.studyPlaceInputWrap}>
              <div className={styles.studyPlaceRadioConainer}>
                <label>
                  <input
                    type="radio"
                    name="studyPlace"
                    id="online"
                    value="online"
                    onChange={e =>
                      setStudyForm(studyForm => ({
                        ...studyForm,
                        studyPlace: "online",
                      }))
                    }
                  />
                  온라인
                </label>
                <label>
                  <input
                    type="radio"
                    name="studyPlace"
                    id="offline"
                    value="offline"
                    onChange={e =>
                      setStudyForm(studyForm => ({
                        ...studyForm,
                        studyPlace: "offline",
                      }))
                    }
                  />
                  오프라인
                </label>
              </div>
              <input
                type="text"
                className={styles.studyInput}
                disabled={studyForm.studyPlace === "online"}
                value={studyForm.offlinePlace}
                placeholder="오프라인 장소를 입력해주세요"
              />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.withConstraintForm}>
            <div>지원자에게 궁금한 점</div>
            <div className={styles.maxCountText}>(최대 5개)</div>
          </div>
          {studyForm.questionnaires.map((questionnaire, index) => (
            <div key={index} className={styles.deletableInputWrap}>
              <input
                key={index}
                className={styles.studyInput}
                type="text"
                value={questionnaire}
                onChange={e => handleChangeQuestion(index, e.target.value)}
                placeholder="지원 시 지원자가 답변할 질문을 입력해주세요"
              />
              {index !== 0 && (
                <button
                  key={index}
                  className={styles.deleteInputButton}
                  onClick={() => deleteQuestionInput(index)}
                >
                  [—]
                </button>
              )}
            </div>
          ))}
          {studyForm.questionnaires.length < 5 && (
            <button
              className={styles.addInputBox}
              onClick={handleAddQuestionBox}
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
