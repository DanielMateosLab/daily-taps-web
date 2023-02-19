// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const WorkoutSliceType = {
  "SINGLE": "SINGLE",
  "MULTIPLE": "MULTIPLE"
};

const { Workout, MultipleExercisesSlice, SingleExerciseSlice, Set, Exercise, LoadUnit, WorkoutSlice } = initSchema(schema);

export {
  Workout,
  MultipleExercisesSlice,
  SingleExerciseSlice,
  Set,
  Exercise,
  LoadUnit,
  WorkoutSliceType,
  WorkoutSlice
};