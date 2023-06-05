export type modalType = 'login' | 'join' | 'joinComplete';
export type eachModalState = {
    isShow: boolean;
    prevModal: modalType | '';
}
export type modalState = {
    [key in modalType] : eachModalState
}