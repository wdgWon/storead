"use client";

import { PropsWithChildren } from "react";

import { useQuery } from "@tanstack/react-query";

import { authQueryOption } from "@/hooks/queryOptions/authQueryOption";

function VerifiedRenderer({ children }: PropsWithChildren) {
  const { data: status } = useQuery(authQueryOption);

  if (!status || status === 401) return null;

  return <>{children}</>;
}

export default VerifiedRenderer;
