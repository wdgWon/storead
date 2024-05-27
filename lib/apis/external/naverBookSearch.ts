import { BookSearchResponse } from "api-domain";
import axios from "axios";

import { ENDPOINTS } from "@/constants/endPoints";

export async function naverBookSearch(
  query: string,
  display: number = 10,
  start: number = 1,
) {
  const res = await axios<BookSearchResponse>(ENDPOINTS.BOOK_SEARCH, {
    headers: {
      "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
    },
    params: {
      query,
      display,
      start,
    },
  });
  return res.data;
}
