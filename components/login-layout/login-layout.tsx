"use client";

import Logo from "../logo";
import { Separator } from "../ui/separator";
import SocialLoginButtonGroup from "./social-login-button-group";

function LoginLayout() {
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
