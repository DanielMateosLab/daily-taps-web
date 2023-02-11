import { Heading, View } from "@aws-amplify/ui-react";

const NewWorkout = () => {
  return (
    <View className="flex flex-col items-center pt-8">
      <Heading level={1} variation="primary">
        Create a new workout
      </Heading>
    </View>
  );
};

export default NewWorkout;
