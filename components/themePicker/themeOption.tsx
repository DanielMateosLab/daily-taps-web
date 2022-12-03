import { Theme } from "./themePicker";

interface OptionProps {
  value: Theme;
  checked: boolean;
  onChange: () => void;
}

const ThemeOption: React.FC<OptionProps> = (props) => (
  <div>
    <input type="radio" name="theme" id={props.value} {...props} />
    <label className="theme-picker-option__label" htmlFor={props.value}>
      {props.value}
    </label>
  </div>
);

export default ThemeOption;
