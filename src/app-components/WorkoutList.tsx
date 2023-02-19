import { Text } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Workout } from "../models";

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const router = useRouter();

  const getWorkouts = async () => {
    const workouts = await DataStore.query(Workout);
    setWorkouts(workouts);
  };

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {workouts.map((workout) => (
        <article
          key={workout.id}
          className="bg-secondary hover:bg-tertiary flex cursor-pointer items-center gap-4 p-4"
          role="button"
          onClick={() => router.push(`/update-workout/${workout.id}`)}
        >
          <Text className="text-lg">{workout.name}</Text>
          <Text className="text-sm opacity-70">{workout.date}</Text>
        </article>
      ))}
    </div>
  );
};

export default WorkoutList;
