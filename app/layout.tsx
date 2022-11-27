import { PropsWithChildren } from "react";
import "#/styles/globals.scss";

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
