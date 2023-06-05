import { LoginInfo } from "@/types/auth";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: LoginInfo = {
  islogin: false,
  accessToken: "",
  nickname: "",
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin(state, action: PayloadAction<boolean>) {
      state.islogin = action.payload;
    },
    setAccessToken(state, action:PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
    }
  }
});

export const {
  setIsLogin,
  setAccessToken,
  setNickname,
} = authSlice.actions;

export const selectAuthInfo = (state: RootState) => state;
export default authSlice.reducer;