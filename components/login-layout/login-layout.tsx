"use client";

import Logo from "../logo";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

function LoginLayout() {
  return (
    <div className="min-w-[10rem] min-h-[15rem] p-4 bg-white dark:bg-black rounded-md">
      <div className="flex flex-col justify-center items-center w-full h-full gap-2">
        <Logo />
        {/* <h1 className="font-bold text-xl">소셜 로그인</h1> */}
        <Separator className="bg-neutral-300" />
        <a
          href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&scope=${process.env.GOOGLE_SCOPE}`}
        >
          <Button
            type="button"
            variant="outline"
            className="bg-white rounded-full font-bold text-black"
          >
            Google
          </Button>
        </a>
        <a
          href={`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&code={code}"`}
        >
          <Button
            type="button"
            variant="outline"
            className="bg-yellow-300 rounded-full font-bold text-black"
          >
            Kakao
          </Button>
        </a>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URI}`}
        >
          <Button
            type="button"
            variant="outline"
            className="bg-slate-700 rounded-full font-bold text-white"
          >
            Github
          </Button>
        </a>
      </div>
    </div>
  );
}

export default LoginLayout;
