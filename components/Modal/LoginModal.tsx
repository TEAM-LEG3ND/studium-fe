import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/Modal.module.sass";
import useLoginModal from "./hooks/useLoginModal";
import Modal from "../common/Modal";

function LoginModal() {
  const { googleLogin } = useLoginModal();
  const loginDom = (<button onClick={() => googleLogin()}>Sign in with Google🚀</button>)
  return (
    <Modal type='login' showCancelBtn showPrevBtn={false} contents={loginDom}/>
  );
};

export default LoginModal;