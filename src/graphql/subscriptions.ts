/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout(
    $filter: ModelSubscriptionWorkoutFilterInput
    $owner: String
  ) {
    onCreateWorkout(filter: $filter, owner: $owner) {
      id
      title
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
      title
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
      title
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
