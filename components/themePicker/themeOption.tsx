import { Theme } from "#/utils/theme";
import { ReactNode } from "react";

interface OptionProps {
  value: Theme;
  checked: boolean;
  onChange: () => void;
  icon: ReactNode;
}

const ThemeOption: React.FC<OptionProps> = (props) => {
  const iconColorClass = props.checked
    ? "text-primary"
    : "text-on-surface-light";

  return (
    <div className="relative grid place-items-center ">
      <input
        className="absolute w-full h-full bg-surface-1 checked:bg-surface-2 checked:pointer-events-none appearance-none cursor-pointer"
        type="radio"
        name="theme"
        id={props.value}
        {...props}
      />
      <div
        className={`relative ${iconColorClass} w-10 h-8 py-1 px-2.5 grid place-items-center pointer-events-none`}
      >
        {props.icon}
      </div>
      <label className="sr-only" htmlFor={props.value}>
        {props.value}
      </label>
    </div>
  );
};

export default ThemeOption;
