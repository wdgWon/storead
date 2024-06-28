import { MutationOptions } from "@tanstack/react-query";

import { Comment } from "@/api/generated/models";
import { CommentPayload, addComment } from "@/lib/apis/comment/addComment";

export const addCommentMutationOption = (
  articleId: string,
): MutationOptions<Comment, Error, CommentPayload> => ({
  mutationFn: (comment) => addComment(articleId, comment),
});
