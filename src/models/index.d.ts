import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





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

type EagerWorkout = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workout, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly date: string;
  readonly SetGroups?: (SetGroup | null)[] | null;
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
  readonly SetGroups: AsyncCollection<SetGroup>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Workout = LazyLoading extends LazyLoadingDisabled ? EagerWorkout : LazyWorkout

export declare const Workout: (new (init: ModelInit<Workout>) => Workout) & {
  copyOf(source: Workout, mutator: (draft: MutableModel<Workout>) => MutableModel<Workout> | void): Workout;
}

type EagerSetGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SetGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly workoutID: string;
  readonly SetExercises?: (SetExercise | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySetGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SetGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly workoutID: string;
  readonly SetExercises: AsyncCollection<SetExercise>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SetGroup = LazyLoading extends LazyLoadingDisabled ? EagerSetGroup : LazySetGroup

export declare const SetGroup: (new (init: ModelInit<SetGroup>) => SetGroup) & {
  copyOf(source: SetGroup, mutator: (draft: MutableModel<SetGroup>) => MutableModel<SetGroup> | void): SetGroup;
}

type EagerSetExercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SetExercise, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly weigth?: number | null;
  readonly load?: number | null;
  readonly rpe?: number | null;
  readonly Exercise?: Exercise | null;
  readonly setID: string;
  readonly setgroupID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly setExerciseExerciseId?: string | null;
}

type LazySetExercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SetExercise, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly weigth?: number | null;
  readonly load?: number | null;
  readonly rpe?: number | null;
  readonly Exercise: AsyncItem<Exercise | undefined>;
  readonly setID: string;
  readonly setgroupID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly setExerciseExerciseId?: string | null;
}

export declare type SetExercise = LazyLoading extends LazyLoadingDisabled ? EagerSetExercise : LazySetExercise

export declare const SetExercise: (new (init: ModelInit<SetExercise>) => SetExercise) & {
  copyOf(source: SetExercise, mutator: (draft: MutableModel<SetExercise>) => MutableModel<SetExercise> | void): SetExercise;
}

type EagerSet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Set, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly restTime?: number | null;
  readonly SetExercises?: (SetExercise | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Set, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly restTime?: number | null;
  readonly SetExercises: AsyncCollection<SetExercise>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Set = LazyLoading extends LazyLoadingDisabled ? EagerSet : LazySet

export declare const Set: (new (init: ModelInit<Set>) => Set) & {
  copyOf(source: Set, mutator: (draft: MutableModel<Set>) => MutableModel<Set> | void): Set;
}