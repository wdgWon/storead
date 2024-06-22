"use client";

import Cookies from "js-cookie";

export const getClientCookies = (identifier: string) => {
  return Cookies.get(identifier);
};

export const setClientCookies = (identifier: string, value: string) => {
  Cookies.set(identifier, value);
};
