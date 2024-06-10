"use client";

import Logo from "../logo";
import VerifiedRenderer from "../verified-renderer/verified-renderer";
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
            <VerifiedRenderer>
              <WriteButton />
              <AuthMenu />
            </VerifiedRenderer>
          </div>
        </div>
        <HeaderProgress />
      </div>
    </header>
  );
}

export default Header;
