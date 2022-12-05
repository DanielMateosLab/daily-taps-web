"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "./PrimaryButton";
import TextField from "./TextField";

const LoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    validationSchema={validationSchema}
    onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
  >
    {({ isSubmitting, isValid }) => (
      <Form className="flex flex-col gap-0.5" noValidate>
        <TextField label="Email" name="email" type="email" />
        <TextField label="Password" name="password" type="password" />
        <div className="mt-4 w-full">
          <PrimaryButton text="Login" disabled={isSubmitting || !isValid} />
        </div>
      </Form>
    )}
  </Formik>
);

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

export default LoginForm;
