"use client";

import AuthFormWrapper from "#/components/AuthFormWrapper";
import AuthSwitcher from "#/components/AuthSwitcher";
import PrimaryButton from "#/components/PrimaryButton";
import TextField from "#/components/TextField";
import { signUpValidator } from "#/utils/validation/signUpValidator";
import { Formik } from "formik";

const SignupForm = () => (
  <Formik
    initialValues={{ email: "", password: "", repeatPassword: "" }}
    validationSchema={signUpValidator}
    onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
  >
    {({ isSubmitting }) => (
      <AuthFormWrapper>
        <TextField label="Email" name="email" type="email" />
        <TextField label="Password" name="password" type="password" />
        <TextField
          label="Repeat your password"
          name="repeatPassword"
          type="password"
        />
        <div className="mt-4 w-full">
          <PrimaryButton text="Sign up" disabled={isSubmitting} />
        </div>
        <AuthSwitcher />
      </AuthFormWrapper>
    )}
  </Formik>
);

export default SignupForm;
