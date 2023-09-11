import axios, { AxiosResponse } from "axios";
import { NotAllowedError, NotAuthenticatedError, NotFoundError } from "./error";

function AuthErrorInterceptor(res: AxiosResponse): AxiosResponse {
  const { status } = res;

  if (status === 401) {
    throw new NotAuthenticatedError();
  }

  if (status === 403) {
    throw new NotAllowedError();
  }

  if (status === 404) {
    throw new NotFoundError();
  }

  return res;
}

export default function appAxios() {
  const instance = axios.create({
    baseURL: "https://api.server.d0lim.com/studium/api/v1",
    validateStatus: status => status < 500,
  });

  instance.interceptors.response.use(AuthErrorInterceptor);

  return instance;
}
