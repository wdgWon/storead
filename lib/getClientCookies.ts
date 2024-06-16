"use client";

import Cookies from "js-cookie";

export const getClientCookies = (identifier: string) => {
  return Cookies.get(identifier);
};
