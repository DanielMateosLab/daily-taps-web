import { Authenticator } from "@aws-amplify/ui-react";
import "@fontsource/inter/variable.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import AppAuthenticator from "../src/app-components/AppAuthenticator";
import AppThemeProvider from "../src/app-components/AppThemeProvider";
import Layout from "../src/app-components/Layout";
import "../styles/globals.css";

// TODO: Remove this once vercel/next.js#16977 is resolved
// Note: Once vercel/next.js#16977 is resolved, you can hoist Amplify.configure into pages/_app.js. Until then, be sure that all pages/* run Amplify.configure({ ...awsExports, ssr: true })
// Amplify.configure({ ...awsExports, ssr: true });

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
        <Authenticator.Provider>
          <Layout>
            <AppAuthenticator>
              <Component {...pageProps} />
            </AppAuthenticator>
          </Layout>
        </Authenticator.Provider>
      </AppThemeProvider>
    </>
  );
}
