import { ACCESS_TOKEN } from "@/constants/identifier";
import { getClientCookies } from "@/lib/getClientCookies";
import { getServerCookies } from "@/lib/getServerCookies";

export const isUserExpired = () => {
  if (typeof window !== undefined) {
    const token = getClientCookies(ACCESS_TOKEN);
    return token === undefined;
  } else {
    const token = getServerCookies(ACCESS_TOKEN);
    return token === undefined;
  }
};
