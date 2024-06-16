export type BaseInstancePayload = {
  endPoint: string;
  payload: RequestInit;
  params?: URLSearchParams;
};

export const baseInstance = async ({
  endPoint,
  payload,
  params,
}: BaseInstancePayload) => {
  const baseUrl =
    typeof window === "undefined"
      ? `${process.env.BASE_URL}`
      : `${process.env.NEXT_PUBLIC_VARIABLE_URL}`;

  const response = await fetch(
    `${baseUrl}${endPoint}` + (params ? `?${params}` : ""),
    payload,
  );

  return response;
};
