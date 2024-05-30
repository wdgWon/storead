import axios from "axios";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// import { authConnectionsGoogleRetrieve } from "./api/generated/domain";

/**
 * @description 인증관련 미들웨어
 */
export async function middleware(request: NextRequest) {
  const platform = request.nextUrl.pathname.split("/").at(-1);
  const searchParams = request.nextUrl.searchParams;
  let response = NextResponse.next();

  switch (platform) {
    case "google": {
      const code = searchParams.get("code");
      if (!code) return NextResponse.next();

      const res = await fetch("/api/v1/auth/connections/google", {
        body: JSON.stringify({ code }),
      });
      console.log(res);
      break;
    }
    default: {
      return;
    }
  }

  return response;
}

export const config = {
  matcher: "/ㅎㄷㅈㅁㅎㄷㅁㅈㅎㅁㅈ/:path*",
};
