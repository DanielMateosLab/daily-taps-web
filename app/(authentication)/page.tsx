"use client";

import { Form, Formik } from "formik";
import PrimaryButton from "#/components/PrimaryButton";
import TextField from "#/components/TextField";
import { loginValidator } from "#/utils/validation/loginValidator";

const LoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    validationSchema={loginValidator}
    onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
  >
    {({ isSubmitting }) => (
      <Form className="w-full md:max-lg:w-4/6 flex gap-0.5 flex-col" noValidate>
        <TextField label="Email" name="email" type="email" />
        <TextField label="Password" name="password" type="password" />
        <div className="mt-4 w-full">
          <PrimaryButton text="Login" disabled={isSubmitting} />
        </div>
      </Form>
    )}
  </Formik>
);

export default LoginForm;
