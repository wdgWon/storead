import { jwtDecode } from "jwt-decode";

import { useQuery } from "@tanstack/react-query";

import { authTokensVerifyCreate } from "@/api/generated/domain";
import { ACCESS_TOKEN } from "@/constants/identifier";
import { QUERY_KEY } from "@/constants/queryKey";
import { getClientCookies } from "@/lib/getClientCookies";

export const useIsUserExpired = (): "EXPIRED" | "REMAIN" => {
  const token = getClientCookies(ACCESS_TOKEN);
  const expiresAt = (jwtDecode(token as string).exp ?? 0) * 1000;

  const { isError } = useQuery({
    queryKey: [QUERY_KEY.TOKEN_EXPIRES_AT],
    queryFn: () => authTokensVerifyCreate({ token: token as string }),
    enabled: !!token,
    staleTime: expiresAt ? expiresAt - Date.now() : Infinity,
    gcTime: 0,
  });

  if (!token) {
    return "EXPIRED";
  }

  return "REMAIN";
};
