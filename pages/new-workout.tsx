import { Alert, Button, Heading, View } from "@aws-amplify/ui-react";
import { Amplify, DataStore } from "aws-amplify";
import { Form, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import FormikTextField, {
  FormikTextFieldRef,
} from "../src/app-components/FormikTextField";
import toDateInputValue from "../src/utils/toDateInputValue";
import awsExports from "../src/aws-exports";
import { Workout } from "../src/models";

Amplify.configure({ ...awsExports, ssr: true });

const NewWorkout = () => {
  const initialValues = {
    name: "",
    date: toDateInputValue(new Date()),
  };
  type Values = typeof initialValues;
  const [error, setError] = useState(false);

  const nameInputRef = useRef<FormikTextFieldRef>(null);
  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const handleSubmit = async (values: Values) => {
    try {
      const workout = await DataStore.save(new Workout(values));
      console.log("Workout created successfully!", workout.id);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <View className="mx-auto flex max-w-lg flex-col items-center gap-4 pt-8">
      <Heading level={1} variation="primary" className="text-center">
        Create a new workout
      </Heading>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="flex flex-col items-center gap-4">
          <FormikTextField
            ref={nameInputRef}
            name="name"
            label="Name"
            className="w-72"
          />
          <FormikTextField
            name="date"
            label="Date"
            type="date"
            className="w-72"
          />
          <Button type="submit" variation="primary" className="w-72">
            Create
          </Button>
          {error && (
            <Alert
              variation="error"
              isDismissible
              onDismiss={() => setError(false)}
            >
              An unexpected error occurred. Try again.
            </Alert>
          )}
        </Form>
      </Formik>
    </View>
  );
};

export default NewWorkout;
