import { ACCESS_TOKEN } from "@/constants/identifier";
import { getClientCookies } from "@/lib/clientCookies";
import { getServerCookies } from "@/lib/serverCookies";

export const isUserExpired = () => {
  if (typeof window !== undefined) {
    const token = getClientCookies(ACCESS_TOKEN);
    return token === undefined;
  } else {
    const token = getServerCookies(ACCESS_TOKEN);
    return token === undefined;
  }
};
