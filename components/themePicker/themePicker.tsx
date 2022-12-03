"use client";

import { useEffect, useState } from "react";
import ThemeOption from "./themeOption";
import "./themePicker.scss";

export enum Theme {
  Light = "light",
  Dark = "dark",
  OS = "os",
}

const ThemePicker: React.FC = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    return isTheme(savedTheme) ? savedTheme : Theme.Dark;
  }
  function isTheme(theme: string | null): theme is Theme {
    return !!theme && Object.values(Theme).includes(theme as Theme);
  }
  const saveTheme = (theme: Theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <fieldset className="theme-picker">
      <legend className="theme-picker__legend">Pick a color theme</legend>

      {Object.values(Theme).map((themeOption) => (
        <ThemeOption
          key={themeOption}
          value={themeOption}
          onChange={() => saveTheme(themeOption)}
          checked={theme === themeOption}
        />
      ))}
    </fieldset>
  );
};

export default ThemePicker;
