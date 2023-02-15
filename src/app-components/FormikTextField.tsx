import { TextField, TextFieldProps } from "@aws-amplify/ui-react";
import { useField } from "formik";
import { FC } from "react";
import { useDateInputFixer } from "../hooks/useDateInputFixer";

type FormikTextFieldProps = Pick<
  TextFieldProps,
  "label" | "descriptiveText" | "placeholder" | "type"
> & {
  name: string;
};

const FormikTextField: FC<FormikTextFieldProps> = (props) => {
  const [field, meta] = useField(props.name);
  const colorModeFix = useDateInputFixer(props.type);

  return (
    <TextField
      errorMessage={meta.error}
      hasError={meta.touched && !!meta.error}
      {...{ ...props, ...field, ...colorModeFix }}
    />
  );
};

export default FormikTextField;
