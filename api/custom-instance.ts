import { LogoutError } from "@/constants/customError";
import { ACCESS_TOKEN } from "@/constants/identifier";
import { getClientCookies } from "@/lib/getClientCookies";
import { getServerCookies } from "@/lib/getServerCookies";

import { authTokensVerifyCreate } from "./generated/domain";

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

  try {
    const response = await fetch(
      `${baseURL}${url}?${new URLSearchParams(params)}`,
      {
        method,
        headers,
        ...(data ? { body: JSON.stringify(data) } : {}),
      },
    );

    if (response.status === 401) {
      try {
        await authTokensVerifyCreate();
        const accessToken = await getAccessToken();

        if (accessToken) {
          headers.Authorization = `Bearer ${accessToken}`;
        }

        const currentResponse = await fetch(
          `${baseURL}${url}?${new URLSearchParams(params)}`,
          {
            method,
            headers,
            ...(data ? { body: JSON.stringify(data) } : {}),
          },
        );

        if (!currentResponse.ok) {
          throw new LogoutError(new Error("refresh expired"));
        }

        return currentResponse.json();
      } catch (error) {
        throw new LogoutError(error);
      }
    }

    if (!response.ok) {
      throw new Error("api request failed");
    }

    return response.json();
  } catch (error) {
    throw new Error("api request failed");
  }
};

const getBaseURL = () => {
  if (typeof window !== "undefined") {
    return "";
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
