"use client";

import { useMutation } from "@tanstack/react-query";

import { ROUTE_HREF } from "@/constants/routeHref";

export type SearchQueryType = {
  query: string;
  display?: string;
  start?: string;
};

export const useBookSearchMutation = () => {
  return useMutation({
    mutationFn: (queries: SearchQueryType) =>
      fetch(`${ROUTE_HREF.NAVER_BOOK_SEARCH}?${new URLSearchParams(queries)}`),
  });
};
