import { Alert, Heading, View } from "@aws-amplify/ui-react";
import { Amplify, DataStore } from "aws-amplify";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import awsExports from "../../src/aws-exports";
import { LazyWorkout, Workout } from "../../src/models";

Amplify.configure({ ...awsExports, ssr: true });

const UpdateWorkout = () => {
  const router = useRouter();
  const [workout, setWorkout] = useState<LazyWorkout | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const workoutId = router.query.workoutId;
    if (typeof workoutId !== "string") return setNotFound(true);

    const fetchWorkout = async () => {
      const workout = await DataStore.query(Workout, workoutId);
      if (!workout) return setNotFound(true);
      setWorkout(workout);
    };
    fetchWorkout();
  }, [router.query.workoutId]);

  return (
    <View className="mx-auto flex max-w-lg flex-col items-center gap-4 pt-8">
      <Heading level={1} variation="primary" className="text-center">
        Update workout
      </Heading>

      {notFound && <Alert variation="error">Workout not found</Alert>}

      {workout && (
        <Heading level={3}>
          <span className="mr-2">{workout.name}</span>
          <span className="font-normal opacity-70">{workout.date}</span>
        </Heading>
      )}
    </View>
  );
};

export default UpdateWorkout;
