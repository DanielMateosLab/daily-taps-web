import { css, SerializedStyles } from "@emotion/react";
import { useContext } from "react";
import { colorModeContext } from "../app-components/AppThemeProvider";

// This fixes a bug where the webkit-calendar-picker-indicator is not getting the correct color in dark mode
// We set the input color scheme css property to dark when the user prefers a dark color scheme
// and the input type is date or datetime-local

export const useDateInputFixer = (
  type?: HTMLInputElement["type"],
): { className?: string; css?: SerializedStyles } => {
  const { colorMode } = useContext(colorModeContext);
  const isDateInput = type && ["date", "datetime-local"].includes(type);

  const computeStyleFixers = () => {
    const className = colorMode === "light" ? "user-set-light" : undefined;
    const style = css`
      @media (prefers-color-scheme: dark) {
        /* The .user-set-light class avoids an user with system dark mode but app chosen light mode
         (which is more specific) to get 'color-scheme: dark' */
        :not(.user-set-light) {
          color-scheme: dark;
        }
      }
    `;

    return { className, css: style };
  };

  return isDateInput ? computeStyleFixers() : {};
};
