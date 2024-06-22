"use client";

import { clientInstance } from "../client-instance";

export const logout = async () => {
  const response = await clientInstance<{ message: string }>({
    endPoint: `/auth/logout`,
    method: "POST",
    cache: "no-store",
  });
  return response;
};
