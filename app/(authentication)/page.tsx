"use client";

import AuthFormWrapper from "#/components/AuthFormWrapper";
import AuthSwitcher from "#/components/AuthSwitcher";
import PrimaryButton from "#/components/PrimaryButton";
import TextField from "#/components/TextField";
import { loginValidator } from "#/utils/validation/loginValidator";
import { Formik } from "formik";

const LoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    validationSchema={loginValidator}
    onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
  >
    {({ isSubmitting }) => (
      <AuthFormWrapper>
        <TextField label="Email" name="email" type="email" />
        <TextField label="Password" name="password" type="password" />
        <div className="mt-4 w-full">
          <PrimaryButton text="Login" disabled={isSubmitting} />
        </div>
        <AuthSwitcher />
      </AuthFormWrapper>
    )}
  </Formik>
);

export default LoginForm;
