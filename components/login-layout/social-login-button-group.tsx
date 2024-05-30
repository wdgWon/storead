import Link from "next/link";

import { ROUTE_HREF } from "@/constants/routeHref";

import { Button } from "../ui/button";

function SocialLoginButtonGroup() {
  return (
    <>
      <a
        href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&scope=${process.env.NEXT_PUBLIC_GOOGLE_SCOPE}`}
      >
        <Button
          type="button"
          variant="outline"
          className="bg-white rounded-full font-bold text-black"
        >
          Google
        </Button>
      </a>
      {/* <Link href={ROUTE_HREF.GITHUB_LOGIN}>
        <Button
          type="button"
          variant="outline"
          className="bg-white rounded-full font-bold text-black"
        >
          Google
        </Button>
      </Link> */}
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
      {/* <Link href={ROUTE_HREF.KAKAO_LOGIN}>
        <Button
          type="button"
          variant="outline"
          className="bg-yellow-300 rounded-full font-bold text-black"
        >
          Kakao
        </Button>
      </Link> */}
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
      {/* <Link href={ROUTE_HREF.GITHUB_LOGIN}>
        <Button
          type="button"
          variant="outline"
          className="bg-slate-700 rounded-full font-bold text-white"
        >
          Github
        </Button>
      </Link> */}
    </>
  );
}

export default SocialLoginButtonGroup;
