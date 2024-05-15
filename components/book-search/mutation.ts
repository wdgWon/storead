"use client";

import { useMutation } from "@tanstack/react-query";

import { naverBookSearch } from "@/lib/apis/external/naverBookSearch";

export const useBookSearchMutation = () => {
  return useMutation({
    mutationFn: (search: string) => naverBookSearch(search),
  });
};
