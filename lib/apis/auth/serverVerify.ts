"use server";

export const serverVerify = async (accessToken: string | undefined) => {
  if (!accessToken) {
    return new Response(null, { status: 401 });
  }

  const response = await fetch(
    `${process.env.BASE_URL}/api/v1/auth/tokens/verify`,
    {
      method: "POST",
      headers: { Authorization: `Beaer ${accessToken}` },
      cache: "no-store",
    },
  );

  return response;
};
