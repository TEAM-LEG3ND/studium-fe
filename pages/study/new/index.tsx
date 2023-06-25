import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/pages/StudyNew.module.sass";

export interface StudyForm {
  title: string;
  intro: string;
  tags: Array<string>;
  studyTemplate: null;
  rules: Array<string>;
  startDate: Date;
  endDate: Date;
  recruitStartDate: Date;
  recruitEndDate: Date;
  member: number;
  studyPlace: "online" | "offline";
  offlinePlace?: string;
  questionnaires: Array<string>;
}  // TODO: 백엔드랑 상의 후 네이밍, 타입 재설정 필요

const initialStudyForm: StudyForm = {
  title: "",
  intro: "",
  tags: [],
  studyTemplate: null,
  rules: [""],
  startDate: new Date(),
  endDate: new Date(),
  recruitStartDate: new Date(),
  recruitEndDate: new Date(),
  member: 0,
  studyPlace: "online",
  questionnaires: [""],
}

export default function StudyNew() {
  const [studyForm, setStudyForm] = useState<StudyForm>(initialStudyForm);

  function handleAddRuleBox() {
    if (studyForm.rules.length < 5) {
      setStudyForm((studyForm => ({...studyForm, rules: [...studyForm.rules, ""]})))
    }
  }

  function handleAddQuestionBox() {
    if (studyForm.questionnaires.length < 5) {
      setStudyForm((studyForm => ({...studyForm, questionnaires: [...studyForm.questionnaires, ""]})))
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <button className={styles.submitButton}>지원하기</button>
        <button>
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
          <input type="text" placeholder="스터디의 이름을 적어주세요"/>
        </div>
        <div>
          한 줄 소개
          <input type="text" placeholder="스터디를 가장 잘 표현할 수 있는 문장을 한 줄로 소개해주세요"/>
        </div>
        <div>
          <div className={styles.withConstraintForm}>
            <div>
              태그
            </div>
            <div className={styles.maxCountText}>
              (최대 5개)
            </div>
          </div>
          <input type="text" placeholder="autocomplete 컴포넌트로 대체 필요"/>
        </div>
        <div>
          스터디 진행 방식
          <button className={styles.template}>템플릿 선택</button>
        </div>
        <div>
          <div className={styles.withConstraintForm}>
            <div>
              진행 규칙
            </div>
            <div className={styles.maxCountText}>
              (최대 5개)
            </div>
          </div>
          { studyForm.rules.map((rule, index) => <input key={index} type="text" placeholder="스터디 진행에 필요한 규칙들을 작성해주세요."/>)}
          { studyForm.rules.length < 5 && <button className={styles.addInputBox} onClick={handleAddRuleBox}>+</button>}
        </div>
        <div className={styles.columnFlexForm}>
          <div>
            모집 기간
            <input type="date"/>
          </div>
          <div>
            진행 기간
            <input type="date"/>
          </div>
        </div>
        <div className={styles.columnFlexForm}>
          <div>
            모집 인원
            <input type="number" placeholder="최대 정원을 입력해주세요. "/>
          </div>
          <div>
            진행 장소
            <div className={styles.studyPlaceForm}>
              <div className={styles.studyPlaceRadioConainer}>
                  <label><input type="radio" name="studyPlace" id="online" value='online'/>온라인</label>
                  <label><input type="radio" name="studyPlace" id="offline" value='offline'/>오프라인</label>
              </div>
              <input type="text" placeholder="오프라인 장소를 입력해주세요."/>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.withConstraintForm}>
            <div>
              지원자에게 궁금한 점
            </div>
            <div className={styles.maxCountText}>
              (최대 5개)
            </div>
          </div>
          { 
            studyForm.questionnaires.map((questionnaire, index) => 
              <input key={index} type="text" placeholder="지원 시 지원자가 답변할 질문을 입력해주세요."/>
            )
          }
          { studyForm.questionnaires.length < 5 && <button className={styles.addInputBox} onClick={handleAddQuestionBox}>+</button>}
        </div>
      </div>
    </div>
  );
}
