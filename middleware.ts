import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  authConnectionsGithubRetrieve,
  authConnectionsGoogleRetrieve,
  authConnectionsKakaoRetrieve,
} from "./api/generated/domain";

/**
 * @description 인증관련 미들웨어
 */
export async function middleware(request: NextRequest) {
  const platform = request.nextUrl.pathname.split("/").at(-1);
  const searchParams = request.nextUrl.searchParams;

  const code = searchParams.get("code");
  if (!code) return NextResponse.next();

  switch (platform) {
    case "google": {
      const res = await authConnectionsGoogleRetrieve(searchParams);
      console.log(res);
      break;
    }
    case "github": {
      const res = await authConnectionsGithubRetrieve(searchParams);
      console.log(res);
      break;
    }
    case "google": {
      const res = await authConnectionsKakaoRetrieve(searchParams);
      console.log(res);
      break;
    }
    default: {
      break;
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/fenifaeinfaoi/:path*",
};
