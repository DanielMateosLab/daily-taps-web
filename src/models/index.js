// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Exercise, LoadUnit, Workout, SetGroup, SetExercise, Set } = initSchema(schema);

export {
  Exercise,
  LoadUnit,
  Workout,
  SetGroup,
  SetExercise,
  Set
};