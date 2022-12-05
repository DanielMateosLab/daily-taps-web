import "#/styles/globals.css";
import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body className="dark bg-surface-1 text-on-surface-normal">{children}</body>
  </html>
);

export default RootLayout;
