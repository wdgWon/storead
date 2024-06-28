import { Article } from "@/api/generated/models";

import { serverInstance } from "../server-instance";

export const getArticleDetail = async (id: string) => {
  const res = await serverInstance({
    endPoint: `/articles/${id}`,
    //FIXME: api 인증 요청 불필요
    // includeAuth: false,
    cache: "no-store",
  }).then((data) => data.json() as Promise<Article>);

  return res;
};
