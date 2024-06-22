"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

import { Profile } from "@/api/generated/models";
import { ACCESS_TOKEN } from "@/constants/identifier";

import { serverInstance } from "../server-instance";

export const getMyProfile = async () => {
  const accessToken = cookies().get(ACCESS_TOKEN)?.value;

  if (!accessToken) return null;

  const expiresAt = jwtDecode(accessToken as string).exp ?? Date.now() / 1000;

  const res = await serverInstance({
    endPoint: "/profiles/me",
    next: { revalidate: expiresAt - Date.now() / 1000 },
  });

  if (!res.ok) {
    return null;
  }

  const profile = ((await res.json()) as { status: number; profile: Profile })
    .profile;

  return profile;
};
