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
    {({ isSubmitting }) => (
      <Form
        className={`w-full md:w-4/6 flex gap-0.5 flex-col
          lg:grid lg:gap-x-6 grid-cols-[1fr_1fr] [grid-template-areas:"e_p"_"b_b"]`}
        noValidate
      >
        <div className="w-full [grid-area:e]">
          <TextField label="Email" name="email" type="email" />
        </div>
        <div className="w-full [grid-area:p]">
          <TextField label="Password" name="password" type="password" />
        </div>
        <div className="mt-4 w-full [grid-area:b]">
          <PrimaryButton text="Login" disabled={isSubmitting} />
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
