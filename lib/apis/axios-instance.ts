import Axios, { AxiosRequestConfig, isAxiosError } from "axios";
import Cookies from "js-cookie";

import { LogoutError } from "@/constants/customError";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: process.env.NEXT_VARIABLE_URL,
});

export const baseInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };

  return promise;
};

export const authInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    headers: {
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
    ...config,
    ...options,
    cancelToken: source.token,
  })
    .then(({ data }) => data)
    .catch((err) => {
      if (isAxiosError(err) && err.status === 401) {
        //TODO: 리프레시 요청
        throw new LogoutError(err);
      }
    });

  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };

  return promise;
};
