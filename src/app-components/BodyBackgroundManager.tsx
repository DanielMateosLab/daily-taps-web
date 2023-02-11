import { useTheme, View } from "@aws-amplify/ui-react";
import { css } from "@emotion/react";
import { FC, PropsWithChildren } from "react";

const BodyBackgroundManager: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();

  return (
    <View
      css={css`
        min-height: 100svh;
        background: ${theme.tokens.colors.background.primary.toString()};
      `}
    >
      {children}
    </View>
  );
};

export default BodyBackgroundManager;
