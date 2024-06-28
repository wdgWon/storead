import { Comment } from "@/api/generated/models";

interface Props {
  comments?: Comment[];
}

function CommentList({ comments }: Props) {
  return (
    <>
      {comments != null && comments?.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li
              key={`${comment.id}`}
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
      ) : (
        <div className="flex justify-center items-center py-6 rounded-md shadow-md dark:shadow-gray-500">
          <p className="text-secondary-foreground">아직 댓글이 없습니다</p>
        </div>
      )}
    </>
  );
}

export default CommentList;
