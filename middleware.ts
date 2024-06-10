import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  ACCESS_TOKEN,
  IS_USER,
  LOGIN_REQUIRED,
  REFRESH_TOKEN,
} from "./constants/identifier";

const protectedUrl = ["/review-form"];

/**
 * @description 인증관련 미들웨어
 */
export async function middleware(request: NextRequest) {
  let response = NextResponse.next();
  const cookieStore = cookies();
  const [access_token, refresh_token] = [
    cookieStore.get(ACCESS_TOKEN),
    cookieStore.get(REFRESH_TOKEN),
  ];

  if (protectedUrl.includes(request.nextUrl.pathname)) {
    if (access_token) {
      const res = await fetch(
        `${process.env.BASE_URL}/api/v1/auth/tokens/verify`,
        {
          method: "POST",
          headers: { Authorization: `Beaer ${access_token}` },
          body: JSON.stringify({ token: access_token }),
          cache: "no-store",
        },
      );

      if (res.status === 401) {
        const refreshRes = await fetch(
          `${process.env.BASE_URL}/api/v1/auth/tokens/refresh`,
          {
            method: "GET",
            headers: {
              cookie: `refresh_token=${refresh_token}`,
            },
            body: JSON.stringify({ token: access_token }),
            cache: "no-store",
          },
        );

        if (refreshRes.status === 401) {
          response = NextResponse.redirect(new URL("/login", request.url));
          response.cookies.set(LOGIN_REQUIRED, "true");
        }

        const setCookies = refreshRes.headers.getSetCookie();

        response.headers.set("Set-Cookie", setCookies.join(", "));
      }
    }

    if (!refresh_token) {
      response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.set(LOGIN_REQUIRED, "true");
    }
  }

  if (refresh_token && !request.cookies.get(IS_USER)) {
    response.cookies.set(IS_USER, "true");
  } else {
    request.cookies.delete(IS_USER);
  }

  return response;
}

// export const config = {
//   matcher: "/review-form/:path*",
// };
