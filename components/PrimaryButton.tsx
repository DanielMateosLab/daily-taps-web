import { ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = {
  text: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClick?: () => void;
};

const PrimaryButton = ({ text, ...props }: PrimaryButtonProps) => (
  <button
    className="w-full h-12 text-2xl text-white bg-primary hover:bg-primary-contrast rounded-lg disabled:opacity-50 disabled:pointer-events-none"
    {...props}
  >
    {text}
  </button>
);

export default PrimaryButton;
