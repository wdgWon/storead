"use client";

import { useEffect, useRef } from "react";

import { LucideCheckCircle2, LucideCircleX } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

import {
  authConnectionsGithubRetrieve,
  authConnectionsGoogleRetrieve,
  authConnectionsKakaoRetrieve,
} from "@/api/generated/domain";
import { authMessages } from "@/constants/toastMessages";

import { AuthPlatforms } from "./types";

interface Props {
  platform: AuthPlatforms;
}

function ClientAuthLoader({ platform }: Props) {
  const isMounted = useRef(false);
  const searchParams = useSearchParams();
  const router = useRouter();

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
          toast.error(
            <>
              <LucideCircleX color="red" />
              <span className="font-semibold">{authMessages.FAILED}</span>
            </>,
          );
          router.replace("/login");
        }
      }

      toast.success(
        <>
          <LucideCheckCircle2 color="green" />
          <span className="font-semibold">{authMessages.SUCCESS}</span>
        </>,
      );
      router.replace("/");
    };
    fetchAuth();
  }, [platform, router, searchParams]);

  return null;
}

export default ClientAuthLoader;
