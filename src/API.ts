/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateExerciseInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  _version?: number | null,
  exerciseLoadUnitId?: string | null,
};

export type ModelExerciseConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelExerciseConditionInput | null > | null,
  or?: Array< ModelExerciseConditionInput | null > | null,
  not?: ModelExerciseConditionInput | null,
  exerciseLoadUnitId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Exercise = {
  __typename: "Exercise",
  id: string,
  name: string,
  description?: string | null,
  LoadUnit?: LoadUnit | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  exerciseLoadUnitId?: string | null,
  owner?: string | null,
};

export type LoadUnit = {
  __typename: "LoadUnit",
  id: string,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateExerciseInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
  exerciseLoadUnitId?: string | null,
};

export type DeleteExerciseInput = {
  id: string,
  _version?: number | null,
};

export type CreateWorkoutInput = {
  id?: string | null,
  name: string,
  date: string,
  _version?: number | null,
};

export type ModelWorkoutConditionInput = {
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelWorkoutConditionInput | null > | null,
  or?: Array< ModelWorkoutConditionInput | null > | null,
  not?: ModelWorkoutConditionInput | null,
};

export type Workout = {
  __typename: "Workout",
  id: string,
  name: string,
  date: string,
  SetGroups?: ModelSetGroupConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelSetGroupConnection = {
  __typename: "ModelSetGroupConnection",
  items:  Array<SetGroup | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type SetGroup = {
  __typename: "SetGroup",
  id: string,
  workoutID: string,
  SetExercises?: ModelSetExerciseConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelSetExerciseConnection = {
  __typename: "ModelSetExerciseConnection",
  items:  Array<SetExercise | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type SetExercise = {
  __typename: "SetExercise",
  id: string,
  weigth?: number | null,
  load?: number | null,
  rpe?: number | null,
  Exercise?: Exercise | null,
  setID: string,
  setgroupID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  setExerciseExerciseId?: string | null,
  owner?: string | null,
};

export type UpdateWorkoutInput = {
  id: string,
  name?: string | null,
  date?: string | null,
  _version?: number | null,
};

export type DeleteWorkoutInput = {
  id: string,
  _version?: number | null,
};

export type CreateSetGroupInput = {
  id?: string | null,
  workoutID: string,
  _version?: number | null,
};

export type ModelSetGroupConditionInput = {
  workoutID?: ModelIDInput | null,
  and?: Array< ModelSetGroupConditionInput | null > | null,
  or?: Array< ModelSetGroupConditionInput | null > | null,
  not?: ModelSetGroupConditionInput | null,
};

export type UpdateSetGroupInput = {
  id: string,
  workoutID?: string | null,
  _version?: number | null,
};

export type DeleteSetGroupInput = {
  id: string,
  _version?: number | null,
};

export type CreateSetExerciseInput = {
  id?: string | null,
  weigth?: number | null,
  load?: number | null,
  rpe?: number | null,
  setID: string,
  setgroupID: string,
  _version?: number | null,
  setExerciseExerciseId?: string | null,
};

export type ModelSetExerciseConditionInput = {
  weigth?: ModelIntInput | null,
  load?: ModelIntInput | null,
  rpe?: ModelIntInput | null,
  setID?: ModelIDInput | null,
  setgroupID?: ModelIDInput | null,
  and?: Array< ModelSetExerciseConditionInput | null > | null,
  or?: Array< ModelSetExerciseConditionInput | null > | null,
  not?: ModelSetExerciseConditionInput | null,
  setExerciseExerciseId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSetExerciseInput = {
  id: string,
  weigth?: number | null,
  load?: number | null,
  rpe?: number | null,
  setID?: string | null,
  setgroupID?: string | null,
  _version?: number | null,
  setExerciseExerciseId?: string | null,
};

export type DeleteSetExerciseInput = {
  id: string,
  _version?: number | null,
};

export type CreateLoadUnitInput = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelLoadUnitConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelLoadUnitConditionInput | null > | null,
  or?: Array< ModelLoadUnitConditionInput | null > | null,
  not?: ModelLoadUnitConditionInput | null,
};

export type UpdateLoadUnitInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteLoadUnitInput = {
  id: string,
  _version?: number | null,
};

export type CreateSetInput = {
  id?: string | null,
  restTime?: number | null,
  _version?: number | null,
};

export type ModelSetConditionInput = {
  restTime?: ModelIntInput | null,
  and?: Array< ModelSetConditionInput | null > | null,
  or?: Array< ModelSetConditionInput | null > | null,
  not?: ModelSetConditionInput | null,
};

export type Set = {
  __typename: "Set",
  id: string,
  restTime?: number | null,
  SetExercises?: ModelSetExerciseConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateSetInput = {
  id: string,
  restTime?: number | null,
  _version?: number | null,
};

export type DeleteSetInput = {
  id: string,
  _version?: number | null,
};

export type ModelExerciseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelExerciseFilterInput | null > | null,
  or?: Array< ModelExerciseFilterInput | null > | null,
  not?: ModelExerciseFilterInput | null,
  exerciseLoadUnitId?: ModelIDInput | null,
};

export type ModelExerciseConnection = {
  __typename: "ModelExerciseConnection",
  items:  Array<Exercise | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWorkoutFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelWorkoutFilterInput | null > | null,
  or?: Array< ModelWorkoutFilterInput | null > | null,
  not?: ModelWorkoutFilterInput | null,
};

export type ModelWorkoutConnection = {
  __typename: "ModelWorkoutConnection",
  items:  Array<Workout | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSetGroupFilterInput = {
  id?: ModelIDInput | null,
  workoutID?: ModelIDInput | null,
  and?: Array< ModelSetGroupFilterInput | null > | null,
  or?: Array< ModelSetGroupFilterInput | null > | null,
  not?: ModelSetGroupFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSetExerciseFilterInput = {
  id?: ModelIDInput | null,
  weigth?: ModelIntInput | null,
  load?: ModelIntInput | null,
  rpe?: ModelIntInput | null,
  setID?: ModelIDInput | null,
  setgroupID?: ModelIDInput | null,
  and?: Array< ModelSetExerciseFilterInput | null > | null,
  or?: Array< ModelSetExerciseFilterInput | null > | null,
  not?: ModelSetExerciseFilterInput | null,
  setExerciseExerciseId?: ModelIDInput | null,
};

export type ModelLoadUnitFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelLoadUnitFilterInput | null > | null,
  or?: Array< ModelLoadUnitFilterInput | null > | null,
  not?: ModelLoadUnitFilterInput | null,
};

export type ModelLoadUnitConnection = {
  __typename: "ModelLoadUnitConnection",
  items:  Array<LoadUnit | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSetFilterInput = {
  id?: ModelIDInput | null,
  restTime?: ModelIntInput | null,
  and?: Array< ModelSetFilterInput | null > | null,
  or?: Array< ModelSetFilterInput | null > | null,
  not?: ModelSetFilterInput | null,
};

export type ModelSetConnection = {
  __typename: "ModelSetConnection",
  items:  Array<Set | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionExerciseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExerciseFilterInput | null > | null,
  or?: Array< ModelSubscriptionExerciseFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionWorkoutFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWorkoutFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkoutFilterInput | null > | null,
};

export type ModelSubscriptionSetGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  workoutID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSetGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionSetGroupFilterInput | null > | null,
};

export type ModelSubscriptionSetExerciseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  weigth?: ModelSubscriptionIntInput | null,
  load?: ModelSubscriptionIntInput | null,
  rpe?: ModelSubscriptionIntInput | null,
  setID?: ModelSubscriptionIDInput | null,
  setgroupID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSetExerciseFilterInput | null > | null,
  or?: Array< ModelSubscriptionSetExerciseFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionLoadUnitFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLoadUnitFilterInput | null > | null,
  or?: Array< ModelSubscriptionLoadUnitFilterInput | null > | null,
};

export type ModelSubscriptionSetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  restTime?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionSetFilterInput | null > | null,
  or?: Array< ModelSubscriptionSetFilterInput | null > | null,
};

export type CreateExerciseMutationVariables = {
  input: CreateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type CreateExerciseMutation = {
  createExercise?:  {
    __typename: "Exercise",
    id: string,
    name: string,
    description?: string | null,
    LoadUnit?:  {
      __typename: "LoadUnit",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    exerciseLoadUnitId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateExerciseMutationVariables = {
  input: UpdateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type UpdateExerciseMutation = {
  updateExercise?:  {
    __typename: "Exercise",
    id: string,
    name: string,
    description?: string | null,
    LoadUnit?:  {
      __typename: "LoadUnit",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    exerciseLoadUnitId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteExerciseMutationVariables = {
  input: DeleteExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type DeleteExerciseMutation = {
  deleteExercise?:  {
    __typename: "Exercise",
    id: string,
    name: string,
    description?: string | null,
    LoadUnit?:  {
      __typename: "LoadUnit",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    exerciseLoadUnitId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateWorkoutMutationVariables = {
  input: CreateWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type CreateWorkoutMutation = {
  createWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    date: string,
    SetGroups?:  {
      __typename: "ModelSetGroupConnection",
      items:  Array< {
        __typename: "SetGroup",
        id: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateWorkoutMutationVariables = {
  input: UpdateWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type UpdateWorkoutMutation = {
  updateWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    date: string,
    SetGroups?:  {
      __typename: "ModelSetGroupConnection",
      items:  Array< {
        __typename: "SetGroup",
        id: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteWorkoutMutationVariables = {
  input: DeleteWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type DeleteWorkoutMutation = {
  deleteWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    date: string,
    SetGroups?:  {
      __typename: "ModelSetGroupConnection",
      items:  Array< {
        __typename: "SetGroup",
        id: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateSetGroupMutationVariables = {
  input: CreateSetGroupInput,
  condition?: ModelSetGroupConditionInput | null,
};

export type CreateSetGroupMutation = {
  createSetGroup?:  {
    __typename: "SetGroup",
    id: string,
    workoutID: string,
    SetExercises?:  {
      __typename: "ModelSetExerciseConnection",
      items:  Array< {
        __typename: "SetExercise",
        id: string,
        weigth?: number | null,
        load?: number | null,
        rpe?: number | null,
        setID: string,
        setgroupID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        setExerciseExerciseId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateSetGroupMutationVariables = {
  input: UpdateSetGroupInput,
  condition?: ModelSetGroupConditionInput | null,
};

export type UpdateSetGroupMutation = {
  updateSetGroup?:  {
    __typename: "SetGroup",
    id: string,
    workoutID: string,
    SetExercises?:  {
      __typename: "ModelSetExerciseConnection",
      items:  Array< {
        __typename: "SetExercise",
        id: string,
        weigth?: number | null,
        load?: number | null,
        rpe?: number | null,
        setID: string,
        setgroupID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        setExerciseExerciseId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteSetGroupMutationVariables = {
  input: DeleteSetGroupInput,
  condition?: ModelSetGroupConditionInput | null,
};

export type DeleteSetGroupMutation = {
  deleteSetGroup?:  {
    __typename: "SetGroup",
    id: string,
    workoutID: string,
    SetExercises?:  {
      __typename: "ModelSetExerciseConnection",
      items:  Array< {
        __typename: "SetExercise",
        id: string,
        weigth?: number | null,
        load?: number | null,
        rpe?: number | null,
        setID: string,
        setgroupID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        setExerciseExerciseId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateSetExerciseMutationVariables = {
  input: CreateSetExerciseInput,
  condition?: ModelSetExerciseConditionInput | null,
};

export type CreateSetExerciseMutation = {
  createSetExercise?:  {
    __typename: "SetExercise",
    id: string,
    weigth?: number | null,
    load?: number | null,
    rpe?: number | null,
    Exercise?:  {
      __typename: "Exercise",
      id: string,
      name: string,
      description?: string | null,
      LoadUnit?:  {
        __typename: "LoadUnit",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      exerciseLoadUnitId?: string | null,
      owner?: string | null,
    } | null,
    setID: string,
    setgroupID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    setExerciseExerciseId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateSetExerciseMutationVariables = {
  input: UpdateSetExerciseInput,
  condition?: ModelSetExerciseConditionInput | null,
};

export type UpdateSetExerciseMutation = {
  updateSetExercise?:  {
    __typename: "SetExercise",
    id: string,
    weigth?: number | null,
    load?: number | null,
    rpe?: number | null,
    Exercise?:  {
      __typename: "Exercise",
      id: string,
      name: string,
      description?: string | null,
      LoadUnit?:  {
        __typename: "LoadUnit",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      exerciseLoadUnitId?: string | null,
      owner?: string | null,
    } | null,
    setID: string,
    setgroupID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    setExerciseExerciseId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteSetExerciseMutationVariables = {
  input: DeleteSetExerciseInput,
  condition?: ModelSetExerciseConditionInput | null,
};

export type DeleteSetExerciseMutation = {
  deleteSetExercise?:  {
    __typename: "SetExercise",
    id: string,
    weigth?: number | null,
    load?: number | null,
    rpe?: number | null,
    Exercise?:  {
      __typename: "Exercise",
      id: string,
      name: string,
      description?: string | null,
      LoadUnit?:  {
        __typename: "LoadUnit",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      exerciseLoadUnitId?: string | null,
      owner?: string | null,
    } | null,
    setID: string,
    setgroupID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    setExerciseExerciseId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateLoadUnitMutationVariables = {
  input: CreateLoadUnitInput,
  condition?: ModelLoadUnitConditionInput | null,
};

export type CreateLoadUnitMutation = {
  createLoadUnit?:  {
    __typename: "LoadUnit",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateLoadUnitMutationVariables = {
  input: UpdateLoadUnitInput,
  condition?: ModelLoadUnitConditionInput | null,
};

export type UpdateLoadUnitMutation = {
  updateLoadUnit?:  {
    __typename: "LoadUnit",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteLoadUnitMutationVariables = {
  input: DeleteLoadUnitInput,
  condition?: ModelLoadUnitConditionInput | null,
};

export type DeleteLoadUnitMutation = {
  deleteLoadUnit?:  {
    __typename: "LoadUnit",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSetMutationVariables = {
  input: CreateSetInput,
  condition?: ModelSetConditionInput | null,
};

export type CreateSetMutation = {
  createSet?:  {
    __typename: "Set",
    id: string,
    restTime?: number | null,
    SetExercises?:  {
      __typename: "ModelSetExerciseConnection",
      items:  Array< {
        __typename: "SetExercise",
        id: string,
        weigth?: number | null,
        load?: number | null,
        rpe?: number | null,
        setID: string,
        setgroupID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        setExerciseExerciseId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateSetMutationVariables = {
  input: UpdateSetInput,
  condition?: ModelSetConditionInput | null,
};

export type UpdateSetMutation = {
  updateSet?:  {
    __typename: "Set",
    id: string,
    restTime?: number | null,
    SetExercises?:  {
      __typename: "ModelSetExerciseConnection",
      items:  Array< {
        __typename: "SetExercise",
        id: string,
        weigth?: number | null,
        load?: number | null,
        rpe?: number | null,
        setID: string,
        setgroupID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        setExerciseExerciseId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteSetMutationVariables = {
  input: DeleteSetInput,
  condition?: ModelSetConditionInput | null,
};

export type DeleteSetMutation = {
  deleteSet?:  {
    __typename: "Set",
    id: string,
    restTime?: number | null,
    SetExercises?:  {
      __typename: "ModelSetExerciseConnection",
      items:  Array< {
        __typename: "SetExercise",
        id: string,
        weigth?: number | null,
        load?: number | null,
        rpe?: number | null,
        setID: string,
        setgroupID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        setExerciseExerciseId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetExerciseQueryVariables = {
  id: string,
};

export type GetExerciseQuery = {
  getExercise?:  {
    __typename: "Exercise",
    id: string,
    name: string,
    description?: string | null,
    LoadUnit?:  {
      __typename: "LoadUnit",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    exerciseLoadUnitId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListExercisesQueryVariables = {
  filter?: ModelExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExercisesQuery = {
  listExercises?:  {
    __typename: "ModelExerciseConnection",
    items:  Array< {
      __typename: "Exercise",
      id: string,
      name: string,
      description?: string | null,
      LoadUnit?:  {
        __typename: "LoadUnit",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      exerciseLoadUnitId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExercisesQueryVariables = {
  filter?: ModelExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExercisesQuery = {
  syncExercises?:  {
    __typename: "ModelExerciseConnection",
    items:  Array< {
      __typename: "Exercise",
      id: string,
      name: string,
      description?: string | null,
      LoadUnit?:  {
        __typename: "LoadUnit",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      exerciseLoadUnitId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWorkoutQueryVariables = {
  id: string,
};

export type GetWorkoutQuery = {
  getWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    date: string,
    SetGroups?:  {
      __typename: "ModelSetGroupConnection",
      items:  Array< {
        __typename: "SetGroup",
        id: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListWorkoutsQueryVariables = {
  filter?: ModelWorkoutFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkoutsQuery = {
  listWorkouts?:  {
    __typename: "ModelWorkoutConnection",
    items:  Array< {
      __typename: "Workout",
      id: string,
      name: string,
      date: string,
      SetGroups?:  {
        __typename: "ModelSetGroupConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWorkoutsQueryVariables = {
  filter?: ModelWorkoutFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWorkoutsQuery = {
  syncWorkouts?:  {
    __typename: "ModelWorkoutConnection",
    items:  Array< {
      __typename: "Workout",
      id: string,
      name: string,
      date: string,
      SetGroups?:  {
        __typename: "ModelSetGroupConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSetGroupQueryVariables = {
  id: string,
};

export type GetSetGroupQuery = {
  getSetGroup?:  {
    __typename: "SetGroup",
    id: string,
    workoutID: string,
    SetExercises?:  {
      __typename: "ModelSetExerciseConnection",
      items:  Array< {
        __typename: "SetExercise",
        id: string,
        weigth?: number | null,
        load?: number | null,
        rpe?: number | null,
        setID: string,
        setgroupID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        setExerciseExerciseId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListSetGroupsQueryVariables = {
  filter?: ModelSetGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSetGroupsQuery = {
  listSetGroups?:  {
    __typename: "ModelSetGroupConnection",
    items:  Array< {
      __typename: "SetGroup",
      id: string,
      workoutID: string,
      SetExercises?:  {
        __typename: "ModelSetExerciseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSetGroupsQueryVariables = {
  filter?: ModelSetGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSetGroupsQuery = {
  syncSetGroups?:  {
    __typename: "ModelSetGroupConnection",
    items:  Array< {
      __typename: "SetGroup",
      id: string,
      workoutID: string,
      SetExercises?:  {
        __typename: "ModelSetExerciseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SetGroupsByWorkoutIDQueryVariables = {
  workoutID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSetGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SetGroupsByWorkoutIDQuery = {
  setGroupsByWorkoutID?:  {
    __typename: "ModelSetGroupConnection",
    items:  Array< {
      __typename: "SetGroup",
      id: string,
      workoutID: string,
      SetExercises?:  {
        __typename: "ModelSetExerciseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSetExerciseQueryVariables = {
  id: string,
};

export type GetSetExerciseQuery = {
  getSetExercise?:  {
    __typename: "SetExercise",
    id: string,
    weigth?: number | null,
    load?: number | null,
    rpe?: number | null,
    Exercise?:  {
      __typename: "Exercise",
      id: string,
      name: string,
      description?: string | null,
      LoadUnit?:  {
        __typename: "LoadUnit",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      exerciseLoadUnitId?: string | null,
      owner?: string | null,
    } | null,
    setID: string,
    setgroupID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    setExerciseExerciseId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListSetExercisesQueryVariables = {
  filter?: ModelSetExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSetExercisesQuery = {
  listSetExercises?:  {
    __typename: "ModelSetExerciseConnection",
    items:  Array< {
      __typename: "SetExercise",
      id: string,
      weigth?: number | null,
      load?: number | null,
      rpe?: number | null,
      Exercise?:  {
        __typename: "Exercise",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        exerciseLoadUnitId?: string | null,
        owner?: string | null,
      } | null,
      setID: string,
      setgroupID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      setExerciseExerciseId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSetExercisesQueryVariables = {
  filter?: ModelSetExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSetExercisesQuery = {
  syncSetExercises?:  {
    __typename: "ModelSetExerciseConnection",
    items:  Array< {
      __typename: "SetExercise",
      id: string,
      weigth?: number | null,
      load?: number | null,
      rpe?: number | null,
      Exercise?:  {
        __typename: "Exercise",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        exerciseLoadUnitId?: string | null,
        owner?: string | null,
      } | null,
      setID: string,
      setgroupID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      setExerciseExerciseId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SetExercisesBySetIDQueryVariables = {
  setID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSetExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SetExercisesBySetIDQuery = {
  setExercisesBySetID?:  {
    __typename: "ModelSetExerciseConnection",
    items:  Array< {
      __typename: "SetExercise",
      id: string,
      weigth?: number | null,
      load?: number | null,
      rpe?: number | null,
      Exercise?:  {
        __typename: "Exercise",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        exerciseLoadUnitId?: string | null,
        owner?: string | null,
      } | null,
      setID: string,
      setgroupID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      setExerciseExerciseId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SetExercisesBySetgroupIDQueryVariables = {
  setgroupID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSetExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SetExercisesBySetgroupIDQuery = {
  setExercisesBySetgroupID?:  {
    __typename: "ModelSetExerciseConnection",
    items:  Array< {
      __typename: "SetExercise",
      id: string,
      weigth?: number | null,
      load?: number | null,
      rpe?: number | null,
      Exercise?:  {
        __typename: "Exercise",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        exerciseLoadUnitId?: string | null,
        owner?: string | null,
      } | null,
      setID: string,
      setgroupID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      setExerciseExerciseId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLoadUnitQueryVariables = {
  id: string,
};

export type GetLoadUnitQuery = {
  getLoadUnit?:  {
    __typename: "LoadUnit",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListLoadUnitsQueryVariables = {
  filter?: ModelLoadUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLoadUnitsQuery = {
  listLoadUnits?:  {
    __typename: "ModelLoadUnitConnection",
    items:  Array< {
      __typename: "LoadUnit",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLoadUnitsQueryVariables = {
  filter?: ModelLoadUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLoadUnitsQuery = {
  syncLoadUnits?:  {
    __typename: "ModelLoadUnitConnection",
    items:  Array< {
      __typename: "LoadUnit",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSetQueryVariables = {
  id: string,
};

export type GetSetQuery = {
  getSet?:  {
    __typename: "Set",
    id: string,
    restTime?: number | null,
    SetExercises?:  {
      __typename: "ModelSetExerciseConnection",
      items:  Array< {
        __typename: "SetExercise",
        id: string,
        weigth?: number | null,
        load?: number | null,
        rpe?: number | null,
        setID: string,
        setgroupID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        setExerciseExerciseId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListSetsQueryVariables = {
  filter?: ModelSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSetsQuery = {
  listSets?:  {
    __typename: "ModelSetConnection",
    items:  Array< {
      __typename: "Set",
      id: string,
      restTime?: number | null,
      SetExercises?:  {
        __typename: "ModelSetExerciseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSetsQueryVariables = {
  filter?: ModelSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSetsQuery = {
  syncSets?:  {
    __typename: "ModelSetConnection",
    items:  Array< {
      __typename: "Set",
      id: string,
      restTime?: number | null,
      SetExercises?:  {
        __typename: "ModelSetExerciseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
  owner?: string | null,
};

export type OnCreateExerciseSubscription = {
  onCreateExercise?:  {
    __typename: "Exercise",
    id: string,
    name: string,
    description?: string | null,
    LoadUnit?:  {
      __typename: "LoadUnit",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    exerciseLoadUnitId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateExerciseSubscription = {
  onUpdateExercise?:  {
    __typename: "Exercise",
    id: string,
    name: string,
    description?: string | null,
    LoadUnit?:  {
      __typename: "LoadUnit",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    exerciseLoadUnitId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteExerciseSubscription = {
  onDeleteExercise?:  {
    __typename: "Exercise",
    id: string,
    name: string,
    description?: string | null,
    LoadUnit?:  {
      __typename: "LoadUnit",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    exerciseLoadUnitId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateWorkoutSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutFilterInput | null,
  owner?: string | null,
};

export type OnCreateWorkoutSubscription = {
  onCreateWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    date: string,
    SetGroups?:  {
      __typename: "ModelSetGroupConnection",
      items:  Array< {
        __typename: "SetGroup",
        id: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateWorkoutSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutFilterInput | null,
  owner?: string | null,
};

export type OnUpdateWorkoutSubscription = {
  onUpdateWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    date: string,
    SetGroups?:  {
      __typename: "ModelSetGroupConnection",
      items:  Array< {
        __typename: "SetGroup",
        id: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteWorkoutSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutFilterInput | null,
  owner?: string | null,
};

export type OnDeleteWorkoutSubscription = {
  onDeleteWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    date: string,
    SetGroups?:  {
      __typename: "ModelSetGroupConnection",
      items:  Array< {
        __typename: "SetGroup",
        id: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateSetGroupSubscriptionVariables = {
  filter?: ModelSubscriptionSetGroupFilterInput | null,
  owner?: string | null,
};

export type OnCreateSetGroupSubscription = {
  onCreateSetGroup?:  {
    __typename: "SetGroup",
    id: string,
    workoutID: string,
    SetExercises?:  {
      __typename: "ModelSetExerciseConnection",
      items:  Array< {
        __typename: "SetExercise",
        id: string,
        weigth?: number | null,
        load?: number | null,
        rpe?: number | null,
        setID: string,
        setgroupID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        setExerciseExerciseId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateSetGroupSubscriptionVariables = {
  filter?: ModelSubscriptionSetGroupFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSetGroupSubscription = {
  onUpdateSetGroup?:  {
    __typename: "SetGroup",
    id: string,
    workoutID: string,
    SetExercises?:  {
      __typename: "ModelSetExerciseConnection",
      items:  Array< {
        __typename: "SetExercise",
        id: string,
        weigth?: number | null,
        load?: number | null,
        rpe?: number | null,
        setID: string,
        setgroupID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        setExerciseExerciseId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteSetGroupSubscriptionVariables = {
  filter?: ModelSubscriptionSetGroupFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSetGroupSubscription = {
  onDeleteSetGroup?:  {
    __typename: "SetGroup",
    id: string,
    workoutID: string,
    SetExercises?:  {
      __typename: "ModelSetExerciseConnection",
      items:  Array< {
        __typename: "SetExercise",
        id: string,
        weigth?: number | null,
        load?: number | null,
        rpe?: number | null,
        setID: string,
        setgroupID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        setExerciseExerciseId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateSetExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionSetExerciseFilterInput | null,
  owner?: string | null,
};

export type OnCreateSetExerciseSubscription = {
  onCreateSetExercise?:  {
    __typename: "SetExercise",
    id: string,
    weigth?: number | null,
    load?: number | null,
    rpe?: number | null,
    Exercise?:  {
      __typename: "Exercise",
      id: string,
      name: string,
      description?: string | null,
      LoadUnit?:  {
        __typename: "LoadUnit",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      exerciseLoadUnitId?: string | null,
      owner?: string | null,
    } | null,
    setID: string,
    setgroupID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    setExerciseExerciseId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateSetExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionSetExerciseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSetExerciseSubscription = {
  onUpdateSetExercise?:  {
    __typename: "SetExercise",
    id: string,
    weigth?: number | null,
    load?: number | null,
    rpe?: number | null,
    Exercise?:  {
      __typename: "Exercise",
      id: string,
      name: string,
      description?: string | null,
      LoadUnit?:  {
        __typename: "LoadUnit",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      exerciseLoadUnitId?: string | null,
      owner?: string | null,
    } | null,
    setID: string,
    setgroupID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    setExerciseExerciseId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteSetExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionSetExerciseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSetExerciseSubscription = {
  onDeleteSetExercise?:  {
    __typename: "SetExercise",
    id: string,
    weigth?: number | null,
    load?: number | null,
    rpe?: number | null,
    Exercise?:  {
      __typename: "Exercise",
      id: string,
      name: string,
      description?: string | null,
      LoadUnit?:  {
        __typename: "LoadUnit",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      exerciseLoadUnitId?: string | null,
      owner?: string | null,
    } | null,
    setID: string,
    setgroupID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    setExerciseExerciseId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateLoadUnitSubscriptionVariables = {
  filter?: ModelSubscriptionLoadUnitFilterInput | null,
};

export type OnCreateLoadUnitSubscription = {
  onCreateLoadUnit?:  {
    __typename: "LoadUnit",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateLoadUnitSubscriptionVariables = {
  filter?: ModelSubscriptionLoadUnitFilterInput | null,
};

export type OnUpdateLoadUnitSubscription = {
  onUpdateLoadUnit?:  {
    __typename: "LoadUnit",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteLoadUnitSubscriptionVariables = {
  filter?: ModelSubscriptionLoadUnitFilterInput | null,
};

export type OnDeleteLoadUnitSubscription = {
  onDeleteLoadUnit?:  {
    __typename: "LoadUnit",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSetSubscriptionVariables = {
  filter?: ModelSubscriptionSetFilterInput | null,
  owner?: string | null,
};

export type OnCreateSetSubscription = {
  onCreateSet?:  {
    __typename: "Set",
    id: string,
    restTime?: number | null,
    SetExercises?:  {
      __typename: "ModelSetExerciseConnection",
      items:  Array< {
        __typename: "SetExercise",
        id: string,
        weigth?: number | null,
        load?: number | null,
        rpe?: number | null,
        setID: string,
        setgroupID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        setExerciseExerciseId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateSetSubscriptionVariables = {
  filter?: ModelSubscriptionSetFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSetSubscription = {
  onUpdateSet?:  {
    __typename: "Set",
    id: string,
    restTime?: number | null,
    SetExercises?:  {
      __typename: "ModelSetExerciseConnection",
      items:  Array< {
        __typename: "SetExercise",
        id: string,
        weigth?: number | null,
        load?: number | null,
        rpe?: number | null,
        setID: string,
        setgroupID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        setExerciseExerciseId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteSetSubscriptionVariables = {
  filter?: ModelSubscriptionSetFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSetSubscription = {
  onDeleteSet?:  {
    __typename: "Set",
    id: string,
    restTime?: number | null,
    SetExercises?:  {
      __typename: "ModelSetExerciseConnection",
      items:  Array< {
        __typename: "SetExercise",
        id: string,
        weigth?: number | null,
        load?: number | null,
        rpe?: number | null,
        setID: string,
        setgroupID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        setExerciseExerciseId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
