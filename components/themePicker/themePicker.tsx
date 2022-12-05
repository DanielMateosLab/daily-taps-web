"use client";

import { defaultTheme, Theme, themeIcons } from "#/utils/theme";
import { useEffect, useState } from "react";
import ThemeOption from "./themeOption";

const ThemePicker: React.FC = () => {
  const [theme, setTheme] = useState<Theme | null>(null);

  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    const isValid = Object.values(Theme).includes(storedTheme as Theme);
    return isValid ? (storedTheme as Theme) : defaultTheme;
  };
  const updateTheme = (newTheme: Theme) => {
    document.body.classList.remove(Theme.Light, Theme.Dark);
    document.body.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    updateTheme(getInitialTheme());
  }, []);

  return (
    <fieldset className="bg-surface-1 rounded-2xl overflow-hidden border border-on-surface-light inline-flex">
      <legend className="sr-only">Pick a color theme</legend>

      {Object.values(Theme).map((themeOption) => (
        <ThemeOption
          key={themeOption}
          value={themeOption}
          onChange={() => updateTheme(themeOption)}
          checked={themeOption === theme}
          icon={themeIcons[themeOption]}
        />
      ))}
    </fieldset>
  );
};

export default ThemePicker;
