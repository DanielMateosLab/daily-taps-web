import { PropsWithChildren } from "react";
import "#/styles/globals.scss";
import ThemePicker from "#/components/themePicker/themePicker";

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body className="dark">
      <ThemePicker />
      {children}
    </body>
  </html>
);

export default RootLayout;
