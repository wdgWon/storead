"use client";

import { useEffect } from "react";

import { useSearchParams } from "next/navigation";

function LoadPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchFn = async () => {
      const res = await fetch(
        `/api/v1/auth/connections/google?code=${searchParams.get("code")}`,
      );
      console.log(JSON.stringify(res.json));
    };
    fetchFn();
  }, [searchParams]);

  return <div>인증 테스트용 페이지</div>;
}

export default LoadPage;
