import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/Modal.module.sass";
import Modal from "../common/Modal";
import { hideModal } from "@/modules/modal";
import { modalType } from "@/types/modal";
import { useDispatch } from "react-redux";

function JoinCompleteModal() {
  const type: modalType = "joinComplete";
  const dispatch = useDispatch();
  const contentsDom = (
    <div>
      <p>Studium의 한 페이지가 된 것을 환영합니다!</p>
      <button onClick={() => dispatch(hideModal(type))}>스터디 둘러보기</button>
    </div>
  );
  return <Modal type={type} showCancelBtn={false} showPrevBtn={false} contents={contentsDom} />;
}

export default JoinCompleteModal;
