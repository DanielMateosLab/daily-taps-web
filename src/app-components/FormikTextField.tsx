import { TextField, TextFieldProps } from "@aws-amplify/ui-react";
import { useField } from "formik";
import { FC } from "react";
import { useDateInputFixer } from "../hooks/useDateInputFixer";

type FormikTextFieldProps = Pick<
  TextFieldProps,
  "label" | "descriptiveText" | "placeholder" | "type" | "className"
> & {
  name: string;
};

const FormikTextField: FC<FormikTextFieldProps> = (props) => {
  const [field, meta] = useField(props.name);
  const { css, className: colorModeClass } = useDateInputFixer(props.type);
  const className = [colorModeClass, props.className].filter(Boolean).join(" ");

  return (
    <TextField
      errorMessage={meta.error}
      hasError={meta.touched && !!meta.error}
      {...props}
      {...field}
      css={css}
      className={className}
    />
  );
};

export default FormikTextField;
