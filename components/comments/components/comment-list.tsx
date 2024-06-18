import { Comment } from "@/api/generated/models";

interface Props {
  articleId: string;
  comments?: Comment[];
}

function CommentList({ articleId, comments }: Props) {
  return (
    <ul>
      {comments != null &&
        comments?.length > 0 &&
        comments.map((comment) => (
          <li
            key={`${articleId}/${comment.id}`}
            className="flex flex-col gap-2"
          >
            <div className="flex gap-2">
              <span>{comment.username}</span>
              <p>{comment.content}</p>
            </div>
            <p>{comment.created_at}</p>
          </li>
        ))}
    </ul>
  );
}

export default CommentList;
