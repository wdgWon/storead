"use client";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

function Footer() {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "footer-h flex justify-center items-center shadow-md",
        theme === "light" && "bg-gray-300",
      )}
    >
      {/* FIXME: 끝나는 날짜 포함시키기 */}
      Copyright © 2024.4 ~ - All right reserved by Team Jak Dang Moi
    </div>
  );
}

export default Footer;
