import Axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

export const SERVER_INSTANCE = Axios.create({
  baseURL: process.env.VARIABLE_URL,
});

export const serverInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();
  // const header = options && options.headers
  // ? {
  //       Authorization: `Bearer ${Cookies.get("access_token")}`,
  //     } : null,

  const promise = SERVER_INSTANCE({
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
