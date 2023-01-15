import { Inter } from "@next/font/google";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";
import { css } from "@emotion/react";

Amplify.configure(awsExports);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Authenticator>
          {({ user }) =>
            user ? (
              <h1
                css={css`
                  color: red;
                `}
              >
                Hello, {user.attributes?.email}
              </h1>
            ) : (
              <div />
            )
          }
        </Authenticator>
      </main>
    </>
  );
}
