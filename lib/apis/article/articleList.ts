"use client";

import {
  ArticlesListParams,
  PaginatedArticleList,
} from "@/api/generated/models";

import { clientInstance } from "../client-instance";

export const getArticleList = async (params: ArticlesListParams) => {
  const searchParams = new URLSearchParams(params);
  // const mapParams = Object.entries(params);
  // mapParams.forEach(([key, value]) => searchParams.append(key, value));

  const res = await clientInstance<PaginatedArticleList>({
    endPoint: `/articles`,
    params: searchParams,
    includeAuth: false,
    // headers: { "Content-Type": "application/json" },
  });

  return res;
};
