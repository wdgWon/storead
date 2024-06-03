"use client";

import { useEffect, useRef } from "react";

import { useSearchParams } from "next/navigation";

import {
  authConnectionsGithubRetrieve,
  authConnectionsGoogleRetrieve,
  authConnectionsKakaoRetrieve,
} from "@/api/generated/domain";
import { UnauthorizedError } from "@/constants/customError";

import { AuthPlatforms } from "./types";

interface Props {
  platform: AuthPlatforms;
}

function ClientAuthLoader({ platform }: Props) {
  const isMounted = useRef(false);
  const searchParams = useSearchParams();
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    const fetchAuth = async () => {
      const code = searchParams.get("code");
      if (!code) {
        //TODO: 로그인 오류 토스트
        return <div>로그인 오류</div>;
      }

      switch (platform) {
        case "google": {
          await authConnectionsGoogleRetrieve(searchParams);
          break;
        }
        case "github": {
          await authConnectionsGithubRetrieve(searchParams);
          break;
        }
        case "kakao": {
          await authConnectionsKakaoRetrieve(searchParams);
          break;
        }
        default: {
          throw new UnauthorizedError(new Error());
        }
      }
    };
    fetchAuth();
  }, [platform, searchParams]);

  return null;
}

export default ClientAuthLoader;
