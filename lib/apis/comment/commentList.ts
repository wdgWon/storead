import { Comment } from "@/api/generated/models";

import { clientInstance } from "../client-instance";

export const commentList = async (articleId: string) => {
  const res = await clientInstance<Comment[]>({
    endPoint: `/comments/article/${articleId}`,
  });

  return res;
};
