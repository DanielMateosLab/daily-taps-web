import { PropsWithChildren } from "react";
import "#/styles/globals.scss";
import ThemePicker from "#/components/themePicker";

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body>
      <ThemePicker />
      {children}
    </body>
  </html>
);

export default RootLayout;
