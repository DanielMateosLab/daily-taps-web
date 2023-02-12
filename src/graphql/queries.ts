/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
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
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncExercises = /* GraphQL */ `
  query SyncExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWorkout = /* GraphQL */ `
  query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
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
export const listWorkouts = /* GraphQL */ `
  query ListWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        date
        SetGroups {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWorkouts = /* GraphQL */ `
  query SyncWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkouts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        date
        SetGroups {
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
      nextToken
      startedAt
    }
  }
`;
export const getSetGroup = /* GraphQL */ `
  query GetSetGroup($id: ID!) {
    getSetGroup(id: $id) {
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
export const listSetGroups = /* GraphQL */ `
  query ListSetGroups(
    $filter: ModelSetGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSetGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        workoutID
        SetExercises {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSetGroups = /* GraphQL */ `
  query SyncSetGroups(
    $filter: ModelSetGroupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSetGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        workoutID
        SetExercises {
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
      nextToken
      startedAt
    }
  }
`;
export const setGroupsByWorkoutID = /* GraphQL */ `
  query SetGroupsByWorkoutID(
    $workoutID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSetGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    setGroupsByWorkoutID(
      workoutID: $workoutID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        workoutID
        SetExercises {
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
      nextToken
      startedAt
    }
  }
`;
export const getSetExercise = /* GraphQL */ `
  query GetSetExercise($id: ID!) {
    getSetExercise(id: $id) {
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
export const listSetExercises = /* GraphQL */ `
  query ListSetExercises(
    $filter: ModelSetExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSetExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        weigth
        load
        rpe
        Exercise {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
export const syncSetExercises = /* GraphQL */ `
  query SyncSetExercises(
    $filter: ModelSetExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSetExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        weigth
        load
        rpe
        Exercise {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
export const setExercisesBySetID = /* GraphQL */ `
  query SetExercisesBySetID(
    $setID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSetExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    setExercisesBySetID(
      setID: $setID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        weigth
        load
        rpe
        Exercise {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
export const setExercisesBySetgroupID = /* GraphQL */ `
  query SetExercisesBySetgroupID(
    $setgroupID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSetExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    setExercisesBySetgroupID(
      setgroupID: $setgroupID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        weigth
        load
        rpe
        Exercise {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
export const getLoadUnit = /* GraphQL */ `
  query GetLoadUnit($id: ID!) {
    getLoadUnit(id: $id) {
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
export const listLoadUnits = /* GraphQL */ `
  query ListLoadUnits(
    $filter: ModelLoadUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLoadUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLoadUnits = /* GraphQL */ `
  query SyncLoadUnits(
    $filter: ModelLoadUnitFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLoadUnits(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSet = /* GraphQL */ `
  query GetSet($id: ID!) {
    getSet(id: $id) {
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
export const listSets = /* GraphQL */ `
  query ListSets(
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        restTime
        SetExercises {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSets = /* GraphQL */ `
  query SyncSets(
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        restTime
        SetExercises {
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
      nextToken
      startedAt
    }
  }
`;
