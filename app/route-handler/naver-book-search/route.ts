import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query") ?? "";
  const display = searchParams.get("display") ?? "10";
  const start = searchParams.get("start") ?? "1";

  const res = await fetch(
    `${process.env.NAVER_BOOK_SEARCH_URL}?query=${query}&display=${display}&start=${start}`,
    {
      headers: {
        "X-Naver-Client-Id": `${process.env.NAVER_CLIENT_ID}`,
        "X-Naver-Client-Secret": `${process.env.NAVER_CLIENT_SECRET}`,
      },
    },
  );

  return res.json();
}
