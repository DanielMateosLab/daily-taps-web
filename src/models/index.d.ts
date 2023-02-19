import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum WorkoutSliceType {
  SINGLE = "SINGLE",
  MULTIPLE = "MULTIPLE"
}

type EagerWorkoutSlice = {
  readonly type?: WorkoutSliceType | keyof typeof WorkoutSliceType | null;
  readonly id?: string | null;
}

type LazyWorkoutSlice = {
  readonly type?: WorkoutSliceType | keyof typeof WorkoutSliceType | null;
  readonly id?: string | null;
}

export declare type WorkoutSlice = LazyLoading extends LazyLoadingDisabled ? EagerWorkoutSlice : LazyWorkoutSlice

export declare const WorkoutSlice: (new (init: ModelInit<WorkoutSlice>) => WorkoutSlice)

type EagerWorkout = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workout, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly date: string;
  readonly workoutSlices?: WorkoutSlice[] | null;
  readonly MultipleExercisesSlices?: (MultipleExercisesSlice | null)[] | null;
  readonly SingleExerciseSlices?: (SingleExerciseSlice | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkout = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workout, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly date: string;
  readonly workoutSlices?: WorkoutSlice[] | null;
  readonly MultipleExercisesSlices: AsyncCollection<MultipleExercisesSlice>;
  readonly SingleExerciseSlices: AsyncCollection<SingleExerciseSlice>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Workout = LazyLoading extends LazyLoadingDisabled ? EagerWorkout : LazyWorkout

export declare const Workout: (new (init: ModelInit<Workout>) => Workout) & {
  copyOf(source: Workout, mutator: (draft: MutableModel<Workout>) => MutableModel<Workout> | void): Workout;
}

type EagerMultipleExercisesSlice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MultipleExercisesSlice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly workoutID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMultipleExercisesSlice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MultipleExercisesSlice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly workoutID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MultipleExercisesSlice = LazyLoading extends LazyLoadingDisabled ? EagerMultipleExercisesSlice : LazyMultipleExercisesSlice

export declare const MultipleExercisesSlice: (new (init: ModelInit<MultipleExercisesSlice>) => MultipleExercisesSlice) & {
  copyOf(source: MultipleExercisesSlice, mutator: (draft: MutableModel<MultipleExercisesSlice>) => MutableModel<MultipleExercisesSlice> | void): MultipleExercisesSlice;
}

type EagerSingleExerciseSlice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SingleExerciseSlice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly restTime?: number | null;
  readonly Sets?: (Set | null)[] | null;
  readonly workoutID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySingleExerciseSlice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SingleExerciseSlice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly restTime?: number | null;
  readonly Sets: AsyncCollection<Set>;
  readonly workoutID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SingleExerciseSlice = LazyLoading extends LazyLoadingDisabled ? EagerSingleExerciseSlice : LazySingleExerciseSlice

export declare const SingleExerciseSlice: (new (init: ModelInit<SingleExerciseSlice>) => SingleExerciseSlice) & {
  copyOf(source: SingleExerciseSlice, mutator: (draft: MutableModel<SingleExerciseSlice>) => MutableModel<SingleExerciseSlice> | void): SingleExerciseSlice;
}

type EagerSet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Set, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly weigth?: number | null;
  readonly load?: number | null;
  readonly rpe?: number | null;
  readonly Exercise?: Exercise | null;
  readonly setgroupID: string;
  readonly singleexercisesliceID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly setExerciseId?: string | null;
}

type LazySet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Set, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly weigth?: number | null;
  readonly load?: number | null;
  readonly rpe?: number | null;
  readonly Exercise: AsyncItem<Exercise | undefined>;
  readonly setgroupID: string;
  readonly singleexercisesliceID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly setExerciseId?: string | null;
}

export declare type Set = LazyLoading extends LazyLoadingDisabled ? EagerSet : LazySet

export declare const Set: (new (init: ModelInit<Set>) => Set) & {
  copyOf(source: Set, mutator: (draft: MutableModel<Set>) => MutableModel<Set> | void): Set;
}

type EagerExercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exercise, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly LoadUnit?: LoadUnit | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly exerciseLoadUnitId?: string | null;
}

type LazyExercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exercise, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly LoadUnit: AsyncItem<LoadUnit | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly exerciseLoadUnitId?: string | null;
}

export declare type Exercise = LazyLoading extends LazyLoadingDisabled ? EagerExercise : LazyExercise

export declare const Exercise: (new (init: ModelInit<Exercise>) => Exercise) & {
  copyOf(source: Exercise, mutator: (draft: MutableModel<Exercise>) => MutableModel<Exercise> | void): Exercise;
}

type EagerLoadUnit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LoadUnit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLoadUnit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LoadUnit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LoadUnit = LazyLoading extends LazyLoadingDisabled ? EagerLoadUnit : LazyLoadUnit

export declare const LoadUnit: (new (init: ModelInit<LoadUnit>) => LoadUnit) & {
  copyOf(source: LoadUnit, mutator: (draft: MutableModel<LoadUnit>) => MutableModel<LoadUnit> | void): LoadUnit;
}