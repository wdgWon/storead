"use client";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

function LoginLayout() {
  return (
    <div className="min-w-[10rem] min-h-[15rem] p-4 bg-white dark:bg-black rounded-md">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="font-bold text-xl">소셜 로그인</h1>
        <Separator />
        <Button
          type="button"
          variant="default"
        >
          구글로 로그인
        </Button>
        <Button type="button">카카오로 로그인</Button>
        <Button type="button">깃헙으로 로그인</Button>
      </div>
    </div>
  );
}

export default LoginLayout;
