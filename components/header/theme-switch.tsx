import { useTheme } from "next-themes";

import { Switch } from "../ui/switch";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <Switch
      checked={theme === "dark"}
      onCheckedChange={(isChecked) => setTheme(isChecked ? "dark" : "light")}
    />
  );
}

export default ThemeSwitch;
