import { Heading } from "@aws-amplify/ui-react";

const NewWorkout = () => {
  return (
    <div className="flex flex-col items-center pt-8">
      <Heading level={1} variation="primary">
        Create a new workout
      </Heading>
    </div>
  );
};

export default NewWorkout;
