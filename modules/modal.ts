import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { modalType, modalState } from '@/types/modal';
import { RootState } from './store';

const initialState: modalState = {
    login: {
        isShow: false,
        prevModal: '',
        data: {}
    },
    join: {
        isShow: false,
        prevModal: '',
        data: {}
    },
    joinCompelete: {
        isShow: false,
        prevModal: '',
        data: {}
    },
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
        initModal(state, action: PayloadAction<modalType>) {
            const type = action.payload;
            let prev = state[type].prevModal;
            while (prev) {
                state[type] = initialState[type];
                prev = state[prev].prevModal
            }
        },
        clearModal(state, action: PayloadAction<modalType>) {
            const type = action.payload;
            state[type] = initialState[type];
        },
        showModal(state, action: PayloadAction<modalType>) {
            const type = action.payload;
            state[type].isShow = true;
        },
        hideModal(state, action: PayloadAction<modalType>) {
            const type = action.payload;
            state[type].isShow = false;
        },
        nextModal(state, action: PayloadAction<{prev: modalType, next: modalType, data: object}>) {
            const {prev, next, data} = action.payload;
            state[prev].data = {...state[prev].data, ...data};
            state[next].prevModal = prev;
            state[next].data = data;
        },
	},
});

export const {
    initModal,
    clearModal,
    showModal,
    hideModal,
    nextModal,
} = modalSlice.actions;

export const selectModalInfo = (state: RootState) => state.modalInfo;

export default modalSlice.reducer;