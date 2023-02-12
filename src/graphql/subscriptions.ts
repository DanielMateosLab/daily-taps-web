/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise(
    $filter: ModelSubscriptionExerciseFilterInput
    $owner: String
  ) {
    onCreateExercise(filter: $filter, owner: $owner) {
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
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise(
    $filter: ModelSubscriptionExerciseFilterInput
    $owner: String
  ) {
    onUpdateExercise(filter: $filter, owner: $owner) {
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
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise(
    $filter: ModelSubscriptionExerciseFilterInput
    $owner: String
  ) {
    onDeleteExercise(filter: $filter, owner: $owner) {
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
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout(
    $filter: ModelSubscriptionWorkoutFilterInput
    $owner: String
  ) {
    onCreateWorkout(filter: $filter, owner: $owner) {
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
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout(
    $filter: ModelSubscriptionWorkoutFilterInput
    $owner: String
  ) {
    onUpdateWorkout(filter: $filter, owner: $owner) {
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
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout(
    $filter: ModelSubscriptionWorkoutFilterInput
    $owner: String
  ) {
    onDeleteWorkout(filter: $filter, owner: $owner) {
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
export const onCreateSetGroup = /* GraphQL */ `
  subscription OnCreateSetGroup(
    $filter: ModelSubscriptionSetGroupFilterInput
    $owner: String
  ) {
    onCreateSetGroup(filter: $filter, owner: $owner) {
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
export const onUpdateSetGroup = /* GraphQL */ `
  subscription OnUpdateSetGroup(
    $filter: ModelSubscriptionSetGroupFilterInput
    $owner: String
  ) {
    onUpdateSetGroup(filter: $filter, owner: $owner) {
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
export const onDeleteSetGroup = /* GraphQL */ `
  subscription OnDeleteSetGroup(
    $filter: ModelSubscriptionSetGroupFilterInput
    $owner: String
  ) {
    onDeleteSetGroup(filter: $filter, owner: $owner) {
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
export const onCreateSetExercise = /* GraphQL */ `
  subscription OnCreateSetExercise(
    $filter: ModelSubscriptionSetExerciseFilterInput
    $owner: String
  ) {
    onCreateSetExercise(filter: $filter, owner: $owner) {
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
export const onUpdateSetExercise = /* GraphQL */ `
  subscription OnUpdateSetExercise(
    $filter: ModelSubscriptionSetExerciseFilterInput
    $owner: String
  ) {
    onUpdateSetExercise(filter: $filter, owner: $owner) {
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
export const onDeleteSetExercise = /* GraphQL */ `
  subscription OnDeleteSetExercise(
    $filter: ModelSubscriptionSetExerciseFilterInput
    $owner: String
  ) {
    onDeleteSetExercise(filter: $filter, owner: $owner) {
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
export const onCreateLoadUnit = /* GraphQL */ `
  subscription OnCreateLoadUnit($filter: ModelSubscriptionLoadUnitFilterInput) {
    onCreateLoadUnit(filter: $filter) {
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
export const onUpdateLoadUnit = /* GraphQL */ `
  subscription OnUpdateLoadUnit($filter: ModelSubscriptionLoadUnitFilterInput) {
    onUpdateLoadUnit(filter: $filter) {
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
export const onDeleteLoadUnit = /* GraphQL */ `
  subscription OnDeleteLoadUnit($filter: ModelSubscriptionLoadUnitFilterInput) {
    onDeleteLoadUnit(filter: $filter) {
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
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet(
    $filter: ModelSubscriptionSetFilterInput
    $owner: String
  ) {
    onCreateSet(filter: $filter, owner: $owner) {
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
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet(
    $filter: ModelSubscriptionSetFilterInput
    $owner: String
  ) {
    onUpdateSet(filter: $filter, owner: $owner) {
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
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet(
    $filter: ModelSubscriptionSetFilterInput
    $owner: String
  ) {
    onDeleteSet(filter: $filter, owner: $owner) {
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
