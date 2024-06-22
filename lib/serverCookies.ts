"use server";

import { cookies } from "next/headers";

export const getServerCookies = (identifier: string) => {
  return cookies().get(identifier)?.value;
};

export const setServerCookies = (identifier: string, value: string) => {
  cookies().set(identifier, value);
};
