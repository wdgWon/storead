"use server";

import { serverInstance } from "../server-instance";

export const serverRefresh = async (refreshToken: string) => {
  const response = await serverInstance({
    endPoint: `/auth/tokens/refresh`,
    method: "GET",
    headers: {
      cookie: `refresh_token=${refreshToken}`,
    },
    cache: "no-store",
  });
  return response;
};
