import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

import { Profile } from "@/api/generated/models";
import { ACCESS_TOKEN } from "@/constants/identifier";

export const getMyProfile = async () => {
  const accessToken = cookies().get(ACCESS_TOKEN)?.value;

  if (!accessToken) {
    return null;
  }

  const expiresAt = jwtDecode(accessToken as string).exp ?? Date.now() / 1000;

  const data = (await fetch(
    `${typeof window === "undefined" ? process.env.BASE_URL : ""}/api/v1/profiles/me`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: { revalidate: expiresAt - Date.now() / 1000 },
    },
  ).then((res) => res.json())) as { status: number; profile: Profile };

  return data.profile;
};
