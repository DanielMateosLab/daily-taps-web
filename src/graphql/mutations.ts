/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
      id
      name
      description
      LoadUnit {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      exerciseLoadUnitId
      owner
    }
  }
`;
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
      id
      name
      description
      LoadUnit {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      exerciseLoadUnitId
      owner
    }
  }
`;
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
      id
      name
      description
      LoadUnit {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      exerciseLoadUnitId
      owner
    }
  }
`;
export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout(
    $input: CreateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    createWorkout(input: $input, condition: $condition) {
      id
      name
      date
      SetGroups {
        items {
          id
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout(
    $input: UpdateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    updateWorkout(input: $input, condition: $condition) {
      id
      name
      date
      SetGroups {
        items {
          id
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout(
    $input: DeleteWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    deleteWorkout(input: $input, condition: $condition) {
      id
      name
      date
      SetGroups {
        items {
          id
          workoutID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createSetGroup = /* GraphQL */ `
  mutation CreateSetGroup(
    $input: CreateSetGroupInput!
    $condition: ModelSetGroupConditionInput
  ) {
    createSetGroup(input: $input, condition: $condition) {
      id
      workoutID
      SetExercises {
        items {
          id
          weigth
          load
          rpe
          setID
          setgroupID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          setExerciseExerciseId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateSetGroup = /* GraphQL */ `
  mutation UpdateSetGroup(
    $input: UpdateSetGroupInput!
    $condition: ModelSetGroupConditionInput
  ) {
    updateSetGroup(input: $input, condition: $condition) {
      id
      workoutID
      SetExercises {
        items {
          id
          weigth
          load
          rpe
          setID
          setgroupID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          setExerciseExerciseId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteSetGroup = /* GraphQL */ `
  mutation DeleteSetGroup(
    $input: DeleteSetGroupInput!
    $condition: ModelSetGroupConditionInput
  ) {
    deleteSetGroup(input: $input, condition: $condition) {
      id
      workoutID
      SetExercises {
        items {
          id
          weigth
          load
          rpe
          setID
          setgroupID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          setExerciseExerciseId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createSetExercise = /* GraphQL */ `
  mutation CreateSetExercise(
    $input: CreateSetExerciseInput!
    $condition: ModelSetExerciseConditionInput
  ) {
    createSetExercise(input: $input, condition: $condition) {
      id
      weigth
      load
      rpe
      Exercise {
        id
        name
        description
        LoadUnit {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseLoadUnitId
        owner
      }
      setID
      setgroupID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      setExerciseExerciseId
      owner
    }
  }
`;
export const updateSetExercise = /* GraphQL */ `
  mutation UpdateSetExercise(
    $input: UpdateSetExerciseInput!
    $condition: ModelSetExerciseConditionInput
  ) {
    updateSetExercise(input: $input, condition: $condition) {
      id
      weigth
      load
      rpe
      Exercise {
        id
        name
        description
        LoadUnit {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseLoadUnitId
        owner
      }
      setID
      setgroupID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      setExerciseExerciseId
      owner
    }
  }
`;
export const deleteSetExercise = /* GraphQL */ `
  mutation DeleteSetExercise(
    $input: DeleteSetExerciseInput!
    $condition: ModelSetExerciseConditionInput
  ) {
    deleteSetExercise(input: $input, condition: $condition) {
      id
      weigth
      load
      rpe
      Exercise {
        id
        name
        description
        LoadUnit {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        exerciseLoadUnitId
        owner
      }
      setID
      setgroupID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      setExerciseExerciseId
      owner
    }
  }
`;
export const createLoadUnit = /* GraphQL */ `
  mutation CreateLoadUnit(
    $input: CreateLoadUnitInput!
    $condition: ModelLoadUnitConditionInput
  ) {
    createLoadUnit(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLoadUnit = /* GraphQL */ `
  mutation UpdateLoadUnit(
    $input: UpdateLoadUnitInput!
    $condition: ModelLoadUnitConditionInput
  ) {
    updateLoadUnit(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLoadUnit = /* GraphQL */ `
  mutation DeleteLoadUnit(
    $input: DeleteLoadUnitInput!
    $condition: ModelLoadUnitConditionInput
  ) {
    deleteLoadUnit(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSet = /* GraphQL */ `
  mutation CreateSet(
    $input: CreateSetInput!
    $condition: ModelSetConditionInput
  ) {
    createSet(input: $input, condition: $condition) {
      id
      restTime
      SetExercises {
        items {
          id
          weigth
          load
          rpe
          setID
          setgroupID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          setExerciseExerciseId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateSet = /* GraphQL */ `
  mutation UpdateSet(
    $input: UpdateSetInput!
    $condition: ModelSetConditionInput
  ) {
    updateSet(input: $input, condition: $condition) {
      id
      restTime
      SetExercises {
        items {
          id
          weigth
          load
          rpe
          setID
          setgroupID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          setExerciseExerciseId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteSet = /* GraphQL */ `
  mutation DeleteSet(
    $input: DeleteSetInput!
    $condition: ModelSetConditionInput
  ) {
    deleteSet(input: $input, condition: $condition) {
      id
      restTime
      SetExercises {
        items {
          id
          weigth
          load
          rpe
          setID
          setgroupID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          setExerciseExerciseId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
