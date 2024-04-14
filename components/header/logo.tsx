"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import logo from "@/public/booklog_logo.svg";
import logoDark from "@/public/booklog_logo_dark.svg";

function Logo() {
  const { theme } = useTheme();
  return (
    <div className="w-[var(--logo-width)]">
      <a href="/">
        <Image
          src={theme === "dark" ? logoDark : logo}
          alt="logo_dark"
          className="object-cover"
        />
      </a>
    </div>
  );
}

export default Logo;
