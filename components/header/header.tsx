"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import logo from "@/public/logo_dark.png";

import { useHeaderProgressStore } from "../../store/header-progress-store";
import HeaderProgress from "./header-progress";

function Header() {
  const { theme } = useTheme();
  const { isShow, scrollProgress } = useHeaderProgressStore();

  return (
    <div className="header-h">
      <div
        className={cn(
          "w-screen header-h fixed shadow-md",
          theme === "dark" ? "bg-black" : "bg-white",
        )}
      >
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
            <span>Posts</span>
            <span>Profile</span>
          </div>
        </div>
        {isShow && <HeaderProgress value={scrollProgress} />}
      </div>
    </div>
  );
}

export default Header;
