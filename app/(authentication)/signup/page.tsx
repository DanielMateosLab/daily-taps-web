"use client";

import { Form, Formik } from "formik";
import PrimaryButton from "#/components/PrimaryButton";
import TextField from "#/components/TextField";
import { signUpValidator } from "#/utils/validation/signUpValidator";

const SignupForm = () => (
  <Formik
    initialValues={{ email: "", password: "", repeatPassword: "" }}
    validationSchema={signUpValidator}
    onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
  >
    {({ isSubmitting }) => (
      <Form className="w-full md:max-lg:w-4/6 flex gap-0.5 flex-col" noValidate>
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
      </Form>
    )}
  </Formik>
);

export default SignupForm;
