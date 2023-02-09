import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

import awsExports from "../src/aws-exports";
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import AppAuthenticator from "../src/app-components/AppAuthenticator";
import theme from "../src/theme";
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
      <ThemeProvider theme={theme}>
        <Authenticator.Provider>
          <AppAuthenticator>
            <Component {...pageProps} />
          </AppAuthenticator>
        </Authenticator.Provider>
      </ThemeProvider>
    </>
  );
}
