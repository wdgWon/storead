import { ACCESS_TOKEN } from "@/constants/identifier";

export const findAccessTokenFromSetCookies = (setCookies: string[]) => {
  const accessTokenCookie = setCookies.find((cookie) =>
    cookie.startsWith(ACCESS_TOKEN),
  );

  if (accessTokenCookie) {
    const cookieValue = accessTokenCookie.split(";")[0];
    const accessToken = cookieValue.split("=")[1];

    return accessToken;
  }

  return null;
};
