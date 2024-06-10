"use client";

import { useEffect, useRef } from "react";

import Cookies from "js-cookie";
import { LucideCircleX } from "lucide-react";
import { toast } from "sonner";

import { LOGIN_REQUIRED } from "@/constants/identifier";
import { authMessages } from "@/constants/toastMessages";

import Logo from "../logo";
import { Separator } from "../ui/separator";
import SocialLoginButtonGroup from "./social-login-button-group";

function LoginLayout() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current === false) {
      isMounted.current = true;
      return;
    }

    const isLoginRequired = Cookies.get(LOGIN_REQUIRED);

    if (isLoginRequired) {
      toast.error(authMessages.LOGIN_REQUIRED, {
        icon: <LucideCircleX color="red" />,
      });
      Cookies.remove(LOGIN_REQUIRED);
    }
  }, []);

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
