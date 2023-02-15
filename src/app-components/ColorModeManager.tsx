import { useTheme, View } from "@aws-amplify/ui-react";
import { css } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import ColorModePicker from "./ColorModePicker";

const ColorModeManager: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();

  return (
    <View
      css={css`
        min-height: 100svh;
        background: ${theme.tokens.colors.background.primary.toString()};
      `}
    >
      {children}
      <div className="fixed bottom-5 flex w-full justify-center">
        <ColorModePicker />
      </div>
    </View>
  );
};

export default ColorModeManager;
