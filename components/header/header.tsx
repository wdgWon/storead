"use client";

import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import logo from "@/public/logo_dark.png";

import { useHeaderProgressStore } from "../../store/header-progress-store";
import HeaderProgress from "./header-progress";

function Header() {
  const { isShow, scrollProgress } = useHeaderProgressStore();

  return (
    <div className="header-h">
      <div className="w-screen header-h fixed shadow-md bg-white dark:bg-black">
        <div className="flex justify-center items-center w-screen header-h px-4 z-header">
          <div className="w-[200px] h-full">
            <a href="/">
              <AspectRatio ratio={16 / 5}>
                <Image
                  src={logo}
                  alt="logo_dark"
                  className="object-cover"
                />
              </AspectRatio>
            </a>
          </div>
          <div className="flex-grow" />
          <div className="flex font-bold text-lg gap-6">
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
