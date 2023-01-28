import {
  Authenticator,
  Heading,
  Text,
  useAuthenticator,
  View,
} from "@aws-amplify/ui-react"
import { css } from "@emotion/react"
import { FC, PropsWithChildren } from "react"

const AppAuthenticator: FC<PropsWithChildren> = ({ children }) => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus])

  const renderMap = {
    configuring: <Authenticator>Loading...</Authenticator>,
    authenticated: <Authenticator>{children}</Authenticator>,
    unauthenticated: (
      <main
        className="flex flex-col items-center gap-4 pt-10"
        css={css`
          min-height: 100svh;
        `}
      >
        <Heading level={1}>Daily Taps</Heading>
        <Text variation="secondary" className="text-lg">
          Please sign in to continue
        </Text>
        <Authenticator className="mt-4" />
      </main>
    ),
  }

  return <View>{renderMap[authStatus]}</View>
}

export default AppAuthenticator
