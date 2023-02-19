import {
  Authenticator,
  Heading,
  Text,
  useAuthenticator,
  View,
} from "@aws-amplify/ui-react";
import { FC, PropsWithChildren } from "react";

const AppAuthenticator: FC<PropsWithChildren> = ({ children }) => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  const renderMap = {
    // The authenticator component has to be rendered to trigger the auth flow
    configuring: (
      <View as="main" className="grid min-h-screen place-items-center">
        <Text>Loading...</Text>
        <Authenticator className="invisible absolute" />
      </View>
    ),
    authenticated: <Authenticator>{children}</Authenticator>,
    unauthenticated: (
      <View
        as="main"
        className="flex min-h-screen flex-col items-center gap-4 px-4 pt-10"
      >
        <Heading level={1}>Daily Taps</Heading>
        <Text variation="secondary" className="text-lg">
          Please sign in to continue
        </Text>
        <Authenticator className="mt-4" />
      </View>
    ),
  };

  return renderMap[authStatus];
};

export default AppAuthenticator;
