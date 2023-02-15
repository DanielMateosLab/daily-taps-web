import { ColorMode, ThemeProvider } from "@aws-amplify/ui-react";
import { createContext, FC, PropsWithChildren, useState } from "react";
import theme from "../theme";

export const colorModeContext = createContext({
  colorMode: "system" as ColorMode,
  setColorMode: (_: ColorMode) => {},
});

const AppThemeProvider: FC<PropsWithChildren> = (props) => {
  const [colorMode, setColorMode] = useState<ColorMode>("system");
  const ColorModeProvider = colorModeContext.Provider;

  return (
    <ThemeProvider theme={theme} colorMode={colorMode}>
      <ColorModeProvider value={{ colorMode, setColorMode }}>
        {props.children}
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default AppThemeProvider;
