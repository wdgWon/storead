"use client";

import {
  PaginatedArticleList,
  RequestArticleList,
} from "@/api/generated/models";

import { clientInstance } from "../client-instance";

export const createArticle = async (payload: RequestArticleList) => {
  const res = await clientInstance<PaginatedArticleList>({
    endPoint: `/articles`,
    method: "POST",
    body: JSON.stringify(payload),
    init: { cache: "no-store" },
  });

  return res;
};
