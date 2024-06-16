import { ACCESS_TOKEN } from "@/constants/identifier";
import { getClientCookies } from "@/lib/getClientCookies";
import { getServerCookies } from "@/lib/getServerCookies";

export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return getClientCookies(ACCESS_TOKEN);
  } else {
    return getServerCookies(ACCESS_TOKEN);
  }
};
