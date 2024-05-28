"use client";

import Link from "next/link";

import Logo from "../logo";
import { Button } from "../ui/button";
import AuthMenu from "./auth-menu";
import HeaderProgress from "./header-progress";
import ThemeSwitch from "./theme-switch";
import WriteButton from "./write-button";

function Header() {
  return (
    <header className="header-h">
      <div className="w-screen header-h fixed shadow-md bg-white dark:bg-black">
        <div className="flex justify-center items-center w-screen header-h px-4 z-header">
          <Logo />
          <div className="flex-grow" />
          <div className="flex items-center font-bold text-lg gap-6">
            <ThemeSwitch />
            <WriteButton />
            <AuthMenu />
          </div>
        </div>
        <HeaderProgress />
      </div>
    </header>
  );
}

export default Header;
