"use client";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import { IntroduceProps } from "../type";

function Introduce({ introduce }: IntroduceProps) {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        "min-w-52 min-h-36 flex justify-center items-start p-4 bg-amber-100 rounded-lg shadow-md",
        theme === "dark" && "shadow-slate-500",
      )}
    >
      <span className="text-black">{introduce}</span>
    </div>
  );
}

export default Introduce;
