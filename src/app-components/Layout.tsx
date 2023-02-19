import { useAuthenticator, useTheme, View } from "@aws-amplify/ui-react";
import { css } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import ColorModePicker from "./ColorModePicker";
import Navbar from "./Navbar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const isAuthenticated = authStatus === "authenticated";
  const theme = useTheme();

  return (
    <View
      className="relative min-h-screen"
      css={css`
        background: ${theme.tokens.colors.background.primary.toString()};
      `}
    >
      {isAuthenticated && <Navbar />}

      {children}

      <footer className="fixed bottom-5 flex w-full justify-center">
        <ColorModePicker />
      </footer>
    </View>
  );
};

export default Layout;
