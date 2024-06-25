import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  ACCESS_TOKEN,
  LOGIN_TOAST,
  MAIN_TOAST,
  REFRESH_TOKEN,
} from "./constants/identifier";
import { authMessages } from "./constants/toastMessages";
import { serverRefresh } from "./lib/apis/auth/serverRefresh";
import { serverVerify } from "./lib/apis/auth/serverVerify";
import { findAccessTokenFromSetCookies } from "./utils/findAccessTokenFromSetCookies";

const protectedUrl = new Set(["/review-form"]);

const userNotAllowedUrl = new Set(["/login"]);

/**
 * @description 인증관련 미들웨어
 */
export async function middleware(request: NextRequest) {
  let response = NextResponse.next();
  const cookieStore = cookies();
  const access_token = cookieStore.get(ACCESS_TOKEN)?.value;
  const refresh_token = cookieStore.get(REFRESH_TOKEN)?.value;

  if (protectedUrl.has(request.nextUrl.pathname)) {
    if (!refresh_token) {
      response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.set(LOGIN_TOAST, authMessages.LOGIN_REQUIRED);

      return response;
    }

    const res = await serverVerify(access_token);

    if (!res.ok) {
      const refreshRes = await serverRefresh(refresh_token);

      if (!refreshRes.ok) {
        response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.set(LOGIN_TOAST, authMessages.TOKEN_EXPIRED);
      }

      const setCookies = refreshRes.headers.getSetCookie();

      const accessToken = findAccessTokenFromSetCookies(setCookies);

      if (accessToken) {
        response.cookies.set(ACCESS_TOKEN, accessToken);
      }

      response.headers.set("Set-Cookie", setCookies.join(", "));
    }

    return response;
  }

  // 액세스 토큰 만료시 재발급
  if (access_token == null && refresh_token) {
    const refreshRes = await serverRefresh(refresh_token);

    if (refreshRes.ok) {
      const setCookies = refreshRes.headers.getSetCookie();

      const accessToken = findAccessTokenFromSetCookies(setCookies);

      if (accessToken) {
        response.cookies.set(ACCESS_TOKEN, accessToken);
      }

      response.headers.set("Set-Cookie", setCookies.join(", "));
    }

    if (refreshRes.status === 401) {
      response = NextResponse.redirect(new URL("/", request.url));
      response.cookies.delete(REFRESH_TOKEN);

      return response;
    }
  }

  // 유저가 접근하면 안되는 경로 처리
  if (
    userNotAllowedUrl.has(request.nextUrl.pathname) &&
    refresh_token != null
  ) {
    response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.set(MAIN_TOAST, authMessages.USER_NOT_ALLOWED);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - route-handler (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!route-handler|_next/static|_next/image|favicon.ico).*)",
  ],
};
