"use client";

import { getAccessToken } from "@/lib/utils";

import { CustomInstanceOptions } from "./type";

export const clientInstance = async <T>({
  url,
  method,
  params,
  data,
  options,
}: {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: Record<string, any>;
  data?: Record<string, any>;
  options?: CustomInstanceOptions;
  responseType?: string;
}): Promise<T> => {
  const headers: Record<string, string> = {};

  if (options?.includeAuth) {
    const accessToken = getAccessToken();
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  const response = await fetch(
    // next.config의 rewrites로 cors를 우회해야하기 때문에 variable url만 기입
    `${process.env.NEXT_VARIABLE_URL}${url}` + new URLSearchParams(params),
    {
      method,
      headers,
      ...(data ? { body: JSON.stringify(data) } : {}),
    },
  );

  return response.json();
};

export default clientInstance;

// import Axios, { AxiosRequestConfig } from "axios";

// export const AXIOS_INSTANCE = Axios.create({
//   baseURL: process.env.NEXT_VARIABLE_URL,
// });

// export const clientInstance = <T>(
//   config: AxiosRequestConfig,
//   options?: AxiosRequestConfig,
// ): Promise<T> => {
//   const source = Axios.CancelToken.source();
//   const promise = AXIOS_INSTANCE({
//     ...config,
//     ...options,
//     cancelToken: source.token,
//   }).then(({ data }) => data);

//   // @ts-ignore
//   promise.cancel = () => {
//     source.cancel("Query was cancelled");
//   };

//   return promise;
// };
