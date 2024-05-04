"use client";

import { Suspense, useState } from "react";

import { Loader } from "lucide-react";
import Link from "next/link";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { QUERY_KEY } from "@/constants/queryKey";
import { tokenVerify } from "@/lib/apis/auth/tokenVerify";

import Logo from "../logo";
import { Button } from "../ui/button";
import AuthMenu from "./auth-menu";
import AuthPage from "./auth-page";
import HeaderProgress from "./header-progress";
import ThemeSwitch from "./theme-switch";

function Header() {
  const [state, setState] = useState(false);
  return (
    <header className="header-h">
      <div className="w-screen header-h fixed shadow-md bg-white dark:bg-black">
        <div className="flex justify-center items-center w-screen header-h px-4 z-header">
          <Logo />
          <div className="flex-grow" />
          <div className="flex items-center font-bold text-lg gap-6">
            <ThemeSwitch />
            <Button onClick={() => setState((old) => !old)}>테스트중</Button>
            <Link href="/post">Posts</Link>
            {state && (
              <Suspense fallback={<Loader />}>
                <AuthPage />
              </Suspense>
            )}
          </div>
        </div>
        <HeaderProgress />
      </div>
    </header>
  );
}

export default Header;
