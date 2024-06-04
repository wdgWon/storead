"use client";

import { useEffect, useRef } from "react";

import { LucideCircleX } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

import Logo from "../logo";
import { Separator } from "../ui/separator";
import SocialLoginButtonGroup from "./social-login-button-group";

function LoginLayout() {
  const isMounted = useRef(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isMounted.current === false) {
      isMounted.current = true;
      return;
    }

    const message = searchParams.get("toast");

    if (message) toast.error(message, { icon: <LucideCircleX color="red" /> });
  }, [searchParams]);

  return (
    <div className="min-w-[10rem] min-h-[15rem] p-4 bg-white dark:bg-black rounded-md">
      <div className="flex flex-col justify-center items-center w-full h-full gap-2">
        <Logo />
        <Separator className="bg-neutral-300" />
        <SocialLoginButtonGroup />
      </div>
    </div>
  );
}

export default LoginLayout;
