export type LoginInfo = {
  islogin: boolean;
  accessToken: string;
  nickname: string;
};

export type RootState = {
  loginInfo: LoginInfo;
};
