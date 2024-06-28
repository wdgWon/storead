import { QUERY_KEY } from "@/constants/queryKey";
import { commentList } from "@/lib/apis/comment/commentList";

export const commentListQueryOption = (articleId: string) => ({
  queryKey: [QUERY_KEY.ARTICLE_COMMENTS, articleId],
  queryFn: () => commentList(articleId),
});
