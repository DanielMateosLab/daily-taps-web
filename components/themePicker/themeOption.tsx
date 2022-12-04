import { Theme } from "#/static/theme";
import { ReactNode } from "react";
import "./themeOption.scss";

interface OptionProps {
  value: Theme;
  checked: boolean;
  onChange: () => void;
  icon: ReactNode;
}

const ThemeOption: React.FC<OptionProps> = (props) => (
  <div className="bg-primary">
    <input
      className="theme-option__input"
      type="radio"
      name="theme"
      id={props.value}
      {...props}
    />
    <label className="theme-picker-option__label" htmlFor={props.value}>
      {props.value}
    </label>
  </div>
);

export default ThemeOption;
