import MoonIcon from "#/icons/moon";
import SunIcon from "#/icons/sun";
import SystemIcon from "#/icons/system";

export enum Theme {
  Light = "light",
  Dark = "dark",
  System = "system",
}

export const defaultTheme = Theme.Dark;
export const themeIcons = {
  [Theme.Light]: <SunIcon />,
  [Theme.Dark]: <MoonIcon />,
  [Theme.System]: <SystemIcon />,
};
