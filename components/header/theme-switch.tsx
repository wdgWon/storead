"use client";

import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "../ui/switch";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-2 justify-center items-center">
      <label
        htmlFor="theme-switch"
        className="relative h-[1.2rem] w-[1.2rem]"
      >
        <Sun className="w-full h-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute w-full h-full top-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </label>
      <Switch
        id="theme-switch"
        checked={theme === "dark"}
        onCheckedChange={(isChecked) => setTheme(isChecked ? "dark" : "light")}
      />
    </div>
  );
}

export default ThemeSwitch;
