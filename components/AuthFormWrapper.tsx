import { Form } from "formik";
import { PropsWithChildren } from "react";

const AuthFormWrapper = ({ children }: PropsWithChildren) => (
  <Form className="w-full md:max-lg:w-4/6 flex gap-0.5 flex-col" noValidate>
    {children}
  </Form>
);

export default AuthFormWrapper;
