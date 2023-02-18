import { Authenticator } from "@aws-amplify/ui-react";
import "@fontsource/inter/variable.css";
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import Head from "next/head";
import AppAuthenticator from "../src/app-components/AppAuthenticator";
import AppThemeProvider from "../src/app-components/AppThemeProvider";
import ColorModeManager from "../src/app-components/ColorModeManager";
import awsExports from "../src/aws-exports";
import "../styles/globals.css";

Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Daily Taps</title>
        <meta
          name="description"
          content="Keep track of your workouts like nobody else"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppThemeProvider>
        <ColorModeManager>
          <Authenticator.Provider>
            <AppAuthenticator>
              <Component {...pageProps} />
            </AppAuthenticator>
          </Authenticator.Provider>
        </ColorModeManager>
      </AppThemeProvider>
    </>
  );
}
