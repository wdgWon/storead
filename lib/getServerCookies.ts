"server-only";

import { cookies } from "next/headers";

export const getServerCookies = (identifier: string | undefined) => {
  return identifier === undefined ? cookies() : cookies().get(identifier);
};
