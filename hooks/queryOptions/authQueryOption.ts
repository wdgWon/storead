"use client";

import { QUERY_KEY } from "@/constants/queryKey";

export const authQueryOption = {
  queryKey: [QUERY_KEY.AUTH],
  queryFn: () =>
    fetch("/route-handler/verify-user", { cache: "no-store" }).then(
      (data) => data.status,
    ),
};
