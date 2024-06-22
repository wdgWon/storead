import { Article } from "@/api/generated/models";

import { serverInstance } from "../server-instance";

export const getArticleDetail = async (id: string) => {
  const [res] = await serverInstance({
    endPoint: `/articles/${id}`,
    cache: "no-store",
  }).then((data) => data.json() as Promise<Article[]>);

  return res;
};
