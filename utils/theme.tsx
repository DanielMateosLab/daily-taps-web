import MoonIcon from "#/icons/moon";
import SunIcon from "#/icons/sun";
import SystemIcon from "#/icons/system";

/* THEME SYSTEM
 *  - Default: System - no className is set and dark theme is used unless user
 *    has a light preference.
 *  - Light: Light theme is used, light class is set.
 *  - Dark: Dark theme is used, dark class is set.
 */

export enum Theme {
  Light = "light",
  Dark = "dark",
  System = "system",
}

export const defaultTheme = Theme.System;

export const themeIcons = {
  [Theme.Light]: <SunIcon />,
  [Theme.Dark]: <MoonIcon />,
  [Theme.System]: <SystemIcon />,
};
