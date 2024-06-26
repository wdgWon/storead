/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Storead
 * 서적을 읽고 정리 하는 공간
 * OpenAPI spec version: 1.0.0
 */
import type { BookList } from "./bookList";
import type { Comment } from "./comment";
import type { Profile } from "./profile";

export type Article = {
  readonly author_info: Profile;
  readonly author_rating: string;
  body: string;
  readonly book: BookList;
  readonly comments: readonly Comment[];
  readonly comments_count: number;
  readonly created_at: string;
  /** @maxLength 255 */
  description: string;
  readonly estimated_reading_time: string;
  readonly id: string;
  readonly recommend_count: string;
  /**
   * @maxLength 50
   * @pattern ^[-\w]+$
   */
  slug: string;
  tags: string;
  /** @maxLength 255 */
  title: string;
  readonly updated_at: string;
  readonly views: string;
};
