import { ACCESS_TOKEN } from "@/constants/identifier";
import { getClientCookies } from "@/lib/getClientCookies";
import { getServerCookies } from "@/lib/getServerCookies";

export const customInstance = async <T>({
  url,
  method,
  params,
  headers = {},
  data,
  includeAuth = true,
}: {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: Record<string, any>;
  data?: Record<string, any>;
  headers?: Record<string, any>;
  signal?: Record<string, any>;
  includeAuth?: boolean;
  responseType?: string;
}): Promise<T> => {
  const baseURL = getBaseURL();

  if (includeAuth) {
    const accessToken = await getAccessToken();
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  const response = await fetch(
    `${baseURL}${url}` + new URLSearchParams(params),
    {
      method,
      headers,
      ...(data ? { body: JSON.stringify(data) } : {}),
    },
  );

  return response.json();
};

const getBaseURL = () => {
  if (typeof window !== "undefined") {
    return process.env.NEXT_VARIABLE_URL;
  } else {
    return process.env.BASE_URL;
  }
};

const getAccessToken = async () => {
  if (typeof window !== "undefined") {
    return getClientCookies(ACCESS_TOKEN);
  } else {
    return getServerCookies(ACCESS_TOKEN);
  }
};

export default customInstance;
