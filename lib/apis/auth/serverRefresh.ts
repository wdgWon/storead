"use server";

export const serverRefresh = async (refreshToken: string) => {
  const response = await fetch(
    `${process.env.BASE_URL}/api/v1/auth/tokens/refresh`,
    {
      method: "GET",
      headers: {
        cookie: `refresh_token=${refreshToken}`,
      },
      cache: "no-store",
    },
  );
  return response;
};
