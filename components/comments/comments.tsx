"use client";

import { useQuery } from "@tanstack/react-query";

import { commentListQueryOption } from "@/hooks/queryOptions/commentListQueryOption";

import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";
import CommentForm from "./components/comment-form";
import CommentList from "./components/comment-list";

interface Props {
  isUser: boolean;
  articleId: string;
}

function Comments({ isUser, articleId }: Props) {
  const { data: comments, isPending } = useQuery(
    commentListQueryOption(articleId),
  );

  if (isPending) return <Skeleton className="w-full h-4" />;

  return (
    <div className="flex flex-col gap-4">
      {isUser && <CommentForm />}
      <Separator />
      <CommentList
        articleId={articleId}
        comments={comments}
      />
    </div>
  );
}

export default Comments;
