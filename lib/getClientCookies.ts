"use client";

import Cookies from "js-cookie";

export const getClientCookies = (identifier: string | undefined) => {
  return identifier === undefined ? Cookies : Cookies.get(identifier);
};
