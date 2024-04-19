import { PlatformType } from "@/app/api/login/[platform]/type";

export const EXTERNAL_HREF: Record<PlatformType, string> = {
  google: "https://accounts.google.com/o/oauth2/v2/auth",
  kakao: "https://kauth.kakao.com/oauth/token",
  github: "https://github.com/login/oauth/authorize",
};
