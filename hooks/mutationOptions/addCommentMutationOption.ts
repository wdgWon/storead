import { MutationOptions } from "@tanstack/react-query";

import { CommentPayload, addComment } from "@/lib/apis/comment/addComment";

export const addCommentMutationOption = (
  articleId: string,
  comment: CommentPayload,
): MutationOptions => ({
  mutationFn: () => addComment(articleId, comment),
});
