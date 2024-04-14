"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

import { useHeaderProgressStore } from "../../store/header-progress-store";
import HeaderProgress from "./header-progress";

const Logo = dynamic(() => import("./logo"), { ssr: false });
const ThemeSwitch = dynamic(() => import("./theme-switch"), { ssr: false });

function Header() {
  const { isShow, scrollProgress } = useHeaderProgressStore();

  return (
    <div className="header-h">
      <div className="w-screen header-h fixed shadow-md bg-white dark:bg-black">
        <div className="flex justify-center items-center w-screen header-h px-4 z-header">
          <Logo />
          <div className="flex-grow" />
          <div className="flex items-center font-bold text-lg gap-6">
            <ThemeSwitch />
            <Link href="/post">Posts</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
        {isShow && <HeaderProgress value={scrollProgress} />}
      </div>
    </div>
  );
}

export default Header;
