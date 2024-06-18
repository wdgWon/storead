"use client";

import Cookies from "js-cookie";

import { ACCESS_TOKEN, LOGIN_TOAST } from "@/constants/identifier";
import { authMessages } from "@/constants/toastMessages";

import { baseInstance } from "./base-instance";

export const clientInstance = async <T>({
  endPoint,
  method = "GET",
  params,
  headers = new Headers(),
  body,
  init,
  includeAuth = true,
}: {
  endPoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: URLSearchParams;
  body?: BodyInit;
  headers?: Headers;
  init?: RequestInit;
  includeAuth?: boolean;
}) => {
  const originalRequest = () => {
    if (includeAuth) {
      headers?.append("Authorization", `Bearer ${Cookies.get(ACCESS_TOKEN)}`);
    }

    return baseInstance({
      endPoint,
      payload: { method, headers, body, ...init },
      params,
    });
  };

  const response = await originalRequest();

  if (response.status === 401) {
    const refreshRes = await baseInstance({
      endPoint: `/auth/tokens/refresh`,
      payload: { method: "GET", headers, cache: "no-store" },
    });

    if (refreshRes.ok) {
      return refreshRes.json() as Promise<T>;
    }

    if (refreshRes.status === 401) {
      Cookies.set(LOGIN_TOAST, authMessages.TOKEN_EXPIRED);
      window.history.pushState(null, "", "/login");
    }
  }

  const data = await response.json();

  return data as T;
};
