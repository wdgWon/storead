"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/booklog_logo.svg";
import logoDark from "@/public/booklog_logo_dark.svg";

import { useHeaderProgressStore } from "../../store/header-progress-store";
import HeaderProgress from "./header-progress";
import ThemeSwitch from "./theme-switch";

function Header() {
  const { isShow, scrollProgress } = useHeaderProgressStore();
  const { theme } = useTheme();

  return (
    <div className="header-h">
      <div className="w-screen header-h fixed shadow-md bg-white dark:bg-black">
        <div className="flex justify-center items-center w-screen header-h px-4 z-header">
          <div className="w-[var(--logo-width)]">
            <a href="/">
              <Image
                src={theme == "dark" ? logoDark : logo}
                alt="logo_dark"
                className="object-cover"
              />
            </a>
          </div>
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
