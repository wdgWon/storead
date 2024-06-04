import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { authMessages } from "./constants/toastMessages";
import { isUserExpired } from "./utils/isUser";

/**
 * @description 인증관련 미들웨어
 */
export async function middleware(request: NextRequest) {
  if (isUserExpired()) {
    // url.searchParams.set("toast", authMessages.LOGIN_REQUIRED);
    return NextResponse.redirect(
      new URL(`/login?toast=${authMessages.LOGIN_REQUIRED}`, request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/review-form/:path*",
};
