"use server";

import { cookies } from "next/headers";

import { ACCESS_TOKEN } from "@/constants/identifier";

import { baseInstance } from "./base-instance";

export const serverInstance = async ({
  endPoint,
  method,
  params,
  headers = new Headers(),
  body,
  init,
  includeAuth = true,
}: {
  endPoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: URLSearchParams;
  body?: BodyInit;
  headers?: Headers;
  init?: RequestInit;
  includeAuth?: boolean;
}) => {
  const cookieStore = cookies();

  // 미들웨어에서 인증 보장
  if (includeAuth) {
    headers?.append("Authorization", `Bearer ${cookieStore.get(ACCESS_TOKEN)}`);
  }

  const response = await baseInstance({
    endPoint,
    payload: { method, headers, body, ...init },
    params,
  });

  return response;
};
