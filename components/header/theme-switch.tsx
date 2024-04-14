"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "../ui/switch";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-2 justify-center items-center">
      <label htmlFor="theme-switch">
        {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
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
