import { TextField, TextFieldProps } from "@aws-amplify/ui-react";
import { useField } from "formik";
import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from "react";
import { useDateInputFixer } from "../hooks/useDateInputFixer";

type FormikTextFieldProps = Pick<
  TextFieldProps,
  "label" | "descriptiveText" | "placeholder" | "type" | "className"
> & {
  name: string;
};

export interface FormikTextFieldRef {
  focus: () => void;
}

const FormikTextField: ForwardRefRenderFunction<
  FormikTextFieldRef,
  FormikTextFieldProps
> = (props, ref) => {
  const [field, meta] = useField(props.name);
  const { css, className: colorModeClass } = useDateInputFixer(props.type);
  const className = [colorModeClass, props.className].filter(Boolean).join(" ");

  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));

  return (
    <TextField
      ref={inputRef}
      errorMessage={meta.error}
      hasError={meta.touched && !!meta.error}
      {...props}
      {...field}
      css={css}
      className={className}
    />
  );
};

export default forwardRef(FormikTextField);
