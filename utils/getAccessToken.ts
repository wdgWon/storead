import { ACCESS_TOKEN } from "@/constants/identifier";
import { getClientCookies } from "@/lib/clientCookies";
import { getServerCookies } from "@/lib/serverCookies";

export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return getClientCookies(ACCESS_TOKEN);
  } else {
    return getServerCookies(ACCESS_TOKEN);
  }
};
