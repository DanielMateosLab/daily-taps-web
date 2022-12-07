"use client";

import { Form, Formik } from "formik";
import PrimaryButton from "#/components/PrimaryButton";
import TextField from "#/components/TextField";
import { loginValidator } from "#/utils/validation/loginValidator";
import AuthFormWrapper from "#/components/AuthFormWrapper";

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
      </AuthFormWrapper>
    )}
  </Formik>
);

export default LoginForm;
