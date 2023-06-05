import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/Modal.module.sass";
import Modal from "../common/Modal";
import { modalType } from "@/types/modal";
import { useDispatch } from "react-redux";

function JoinModal() {
  const type: modalType = "join";
  const contentsDom = (
    <div>
      
    </div>
  );
  return <Modal type={type} showCancelBtn showPrevBtn={false} contents={contentsDom} />;
}

export default JoinModal;
