"use client";

import { useEffect, useState } from "react";
import "./themePicker.scss";

enum Theme {
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

interface OptionProps {
  value: Theme;
  checked: boolean;
  onChange: () => void;
}
const ThemeOption: React.FC<OptionProps> = (props) => (
  <div>
    <input type="radio" name="theme" id={props.value} {...props} />
    <label className="theme-picker-option__label" htmlFor={props.value}>
      {props.value}
    </label>
  </div>
);

export default ThemePicker;
