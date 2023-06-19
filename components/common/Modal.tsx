import styles from "@/styles/components/Modal.module.sass";
import { ModalType } from "@/types/modal";
import { useModal } from "./hooks/useModal";

type ModalInfo = {
  type: ModalType;
  showPrevBtn: boolean;
  showCancelBtn: boolean;
  contents: React.ReactNode;
};

function Modal({ type, showPrevBtn, showCancelBtn, contents }: ModalInfo) {
  const { currentModalData, closeModal, movePrevModal } = useModal(type);
  return (
    currentModalData.isShow && (
      <div
        role="presentation"
        className={styles.modal_background}
        onClick={closeModal}
      >
        <div
          role="presentation"
          className={styles.modal_area}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          {showPrevBtn && currentModalData.prevModal && (
            <button
              type="button"
              className={styles.modal_prev}
              onClick={movePrevModal}
            >
              {"<-"}
            </button>
          )}
          {showCancelBtn && (
            <button
              type="button"
              className={styles.modal_cancel}
              onClick={closeModal}
            >
              x
            </button>
          )}
          <div>{contents}</div>
        </div>
      </div>
    )
  );
}

export default Modal;
