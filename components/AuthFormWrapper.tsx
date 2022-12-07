import { Form } from "formik";
import { PropsWithChildren } from "react";

const AuthFormWrapper = ({ children }: PropsWithChildren) => (
  <Form
    className="md:max-lg:w-4/6 mx-auto flex gap-0.5 flex-col items-center"
    noValidate
  >
    {children}
  </Form>
);

export default AuthFormWrapper;
