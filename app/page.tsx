"use client";

import LoginForm from "#/components/LoginForm";
import ThemePicker from "#/components/themePicker/themePicker";
import { RefCallback, useCallback } from "react";
import "#/styles/app.css";

export default function Page() {
  const pageCb: RefCallback<HTMLDivElement> = useCallback((node) => {
    if (node) {
      node.classList.add("rendered");
      node.style.height = `${window.innerHeight}px`;
    }
  }, []);

  return (
    <div ref={pageCb} className="container flex flex-col">
      <main className="grow flex flex-col gap-6 py-8">
        <h1 className="text-primary text-8xl text-center">DAILY TAPS</h1>
        <p className="text-on-surface-light text-2xl text-center">
          The best companion for your workouts
        </p>
        <LoginForm />
      </main>
      <footer className="flex gap-6 justify-center items-center py-4">
        <a
          href="#"
          className="text-on-surface-light hover:text-primary-contrast"
        >
          Cookies
        </a>
        <ThemePicker />
      </footer>
    </div>
  );
}
