export type PlatformType = "google" | "kakao" | "github";

export interface SocialLoginParams {
  params: PlatformType;
}
