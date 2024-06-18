import { cookies } from "next/headers";

import { BookCard } from "@/components/book-card";
import Comments from "@/components/comments/comments";
import { ACCESS_TOKEN } from "@/constants/identifier";
import { getArticleDetail } from "@/lib/apis/article/retrieveSingleArticle";

interface Props {
  params: { id: string };
}

async function ReviewDetail({ params: { id } }: Props) {
  const article = await getArticleDetail(id);
  const isUser = cookies().has(ACCESS_TOKEN);

  return (
    <div className="flex flex-col">
      <span>{article.title}</span>
      <BookCard
        title={article.book.title}
        image={article.book.thumbnail_url}
        author={article.book.author}
        description={article.book.description}
      />
      {/* FIXME: 에디터 뷰어로 출력 */}
      <span>{article.body}</span>
      <Comments
        articleId={id}
        isUser={isUser}
      />
    </div>
  );
}

export default ReviewDetail;
