/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Storead
 * 서적을 읽고 정리 하는 공간
 * OpenAPI spec version: 1.0.0
 */
import type { Response } from "./response";

export type PaginatedResponseList = {
  /** @nullable */
  next?: string | null;
  /** @nullable */
  previous?: string | null;
  results: Response[];
};
