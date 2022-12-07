import * as Yup from "yup";
import { fieldRequiredError } from "./shared";

export const loginValidator = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required(fieldRequiredError),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required(fieldRequiredError),
});
