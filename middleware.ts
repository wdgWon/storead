import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  ACCESS_TOKEN,
  IS_USER,
  LOGIN_TOAST,
  MAIN_TOAST,
  REFRESH_TOKEN,
} from "./constants/identifier";
import { authMessages } from "./constants/toastMessages";
import { serverRefresh } from "./lib/apis/auth/serverRefresh";
import { serverVerify } from "./lib/apis/auth/serverVerify";

const protectedUrl = new Set(["/review-form"]);

const userNotAllowedUrl = new Set(["/login"]);

/**
 * @description 인증관련 미들웨어
 * TODO: isUser 쿠키 세팅 로직 삭제
 */
export async function middleware(request: NextRequest) {
  let response = NextResponse.next();
  const cookieStore = cookies();
  const [access_token, refresh_token] = [
    cookieStore.get(ACCESS_TOKEN)?.value,
    cookieStore.get(REFRESH_TOKEN)?.value,
  ];

  if (protectedUrl.has(request.nextUrl.pathname)) {
    if (!refresh_token) {
      response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.set(LOGIN_TOAST, authMessages.LOGIN_REQUIRED);

      return response;
    }

    const res = await serverVerify(access_token);

    if (res.status === 401) {
      const refreshRes = await serverRefresh(refresh_token);

      if (refreshRes.status === 401) {
        response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.set(LOGIN_TOAST, authMessages.TOKEN_EXPIRED);
      }

      const setCookies = refreshRes.headers.getSetCookie();

      response.headers.set("Set-Cookie", setCookies.join(", "));
    }

    return response;
  }

  if (access_token == null && refresh_token) {
    const refreshRes = await serverRefresh(refresh_token);

    if (!refreshRes.ok && request.cookies.get(IS_USER)) {
      request.cookies.delete(IS_USER);
    }

    if (refreshRes.ok) {
      const setCookie = refreshRes.headers.getSetCookie();
      response.headers.set("Set-Cookie", setCookie.join(", "));

      if (!request.cookies.get(IS_USER)) {
        response.cookies.set(IS_USER, "true");
      }
    }
  }

  if (refresh_token && !request.cookies.get(IS_USER)) {
    response.cookies.set(IS_USER, "true");
  } else {
    request.cookies.delete(IS_USER);
  }

  if (
    userNotAllowedUrl.has(request.nextUrl.pathname) &&
    request.cookies.get(IS_USER)
  ) {
    response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.set(MAIN_TOAST, authMessages.USER_NOT_ALLOWED);
  }

  return response;
}
