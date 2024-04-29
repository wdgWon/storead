import { PlatformType } from "@/app/auth/[platform]/type";

export const EXTERNAL_HREF: Record<Uppercase<PlatformType>, string> = {
  GOOGLE: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&scope=${process.env.NEXT_PUBLIC_GOOGLE_SCOPE}`,
  KAKAO: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`,
  GITHUB: `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI}`,
};

// "https://kauth.kakao.com/oauth/token" 토큰 받는 url
