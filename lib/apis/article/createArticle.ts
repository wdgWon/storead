"use client";

import { Article, RequestArticleList } from "@/api/generated/models";

import { clientInstance } from "../client-instance";

export const createArticle = async (
  payload: RequestArticleList & { slug?: string },
) => {
  const res = await clientInstance<Article>({
    endPoint: `/articles`,
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  return res;
};
