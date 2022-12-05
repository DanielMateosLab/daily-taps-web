import { PropsWithChildren } from "react";
import "#/styles/globals.css";
import ThemePicker from "#/components/themePicker/themePicker";

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body className="dark bg-surface-1 text-on-surface-normal">
      <ThemePicker />
      {children}
    </body>
  </html>
);

export default RootLayout;
