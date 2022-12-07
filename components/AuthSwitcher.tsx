"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AuthSwitcher = () => {
  const pathname = usePathname();
  const page = pathname === "/signup" ? "signUp" : "login";
  const content = {
    signUp: {
      question: "Already have an account?",
      link: "Log in",
      path: "/",
    },
    login: {
      question: "Don't have an account?",
      link: "Sign up",
      path: "signup",
    },
  };

  return (
    <div className="text-on-surface-light text-center text-base w-full mt-8">
      {content[page].question}{" "}
      <Link
        href={content[page].path}
        className="text-primary  text-center hover:text-primary-contrast"
      >
        {content[page].link}!
      </Link>
    </div>
  );
};

export default AuthSwitcher;
