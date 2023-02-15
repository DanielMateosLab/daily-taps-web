import { Button, Heading, View } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { Form, Formik } from "formik";
import FormikTextField from "../src/app-components/FormikTextField";
import { Workout } from "../src/models";

const NewWorkout = () => {
  const hanldeSubmit = async () => {
    try {
      await DataStore.save(
        new Workout({
          date: new Date().toISOString(),
          name: "My first workout",
        }),
      );
      console.log("Post saved successfully!");
    } catch (error) {
      console.log("Error saving post", error);
    }
  };

  // TODO: change color picker to use icons (using react-icons)
  // see how to set the format of the initial date
  // revert graphql schema to use date instead of DateTime in the date field

  return (
    <View className="flex flex-col items-center pt-8">
      <Heading level={1} variation="primary">
        Create a new workout
      </Heading>
      <Formik
        initialValues={{ name: "", date: new Date().toISOString() }}
        onSubmit={(values) => console.log(values)}
      >
        <Form className="flex flex-col gap-4">
          <FormikTextField name="name" label="Name" />
          <FormikTextField name="date" label="Date" type="date" />
          <Button type="submit" variation="primary">
            Create
          </Button>
        </Form>
      </Formik>
    </View>
  );
};

export default NewWorkout;
