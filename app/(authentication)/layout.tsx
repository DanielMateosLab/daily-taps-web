import ThemePicker from "#/components/themePicker/themePicker";
import "#/styles/globals.css";
import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => (
  <div className="container flex flex-col">
    <main className="grow flex flex-col gap-6 py-8 items-center">
      <h1 className="text-primary text-8xl text-center">DAILY TAPS</h1>

      <p className="text-on-surface-light text-2xl text-center">
        The best companion for your workouts
      </p>

      <div className="flex">{children}</div>
    </main>

    <footer className="flex gap-6 justify-center items-center py-4">
      <a
        href="#"
        className="text-on-surface-light hover:text-primary-contrast text-base"
      >
        Cookies
      </a>

      <ThemePicker />
    </footer>
  </div>
);

export default AuthLayout;
