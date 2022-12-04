import { Theme } from "#/utils/theme";
import { ReactNode } from "react";

interface OptionProps {
  value: Theme;
  checked: boolean;
  onChange: () => void;
  icon: ReactNode;
}

const ThemeOption: React.FC<OptionProps> = (props) => (
  <div className="bg-surface-1">
    <input
      className="theme-option__input"
      type="radio"
      name="theme"
      id={props.value}
      {...props}
    />
    <label className="text-on-surface-light" htmlFor={props.value}>
      {props.value}
    </label>
  </div>
);

export default ThemeOption;
