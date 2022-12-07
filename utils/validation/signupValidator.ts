import * as Yup from "yup";
import { loginValidator } from "./loginValidator";

export const signupValidator = loginValidator.shape({
  repeatPassword: Yup.string()
    .required("Repeat your password.")
    .test(
      "passwords-match",
      "The passwords do not match.",
      (value, context) => value === context.parent.password
    ),
});
