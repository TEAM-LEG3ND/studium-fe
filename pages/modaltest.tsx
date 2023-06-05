import Head from "next/head";
import Modal from "@/components/common/Modal";
import { useModalTest } from "./useModalTest";
import LoginModal from "@/components/Modal/LoginModal";
import JoinCompleteModal from "@/components/Modal/JoinCompleteModal";

export default function ModalTest() {
  const { clickBtn } = useModalTest();
  return (
    <>
      <button onClick={clickBtn}> show modal </button>
      <LoginModal />
      <JoinCompleteModal />
    </>
  );
}
