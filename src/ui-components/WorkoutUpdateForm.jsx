/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Workout } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function WorkoutUpdateForm(props) {
  const {
    id: idProp,
    workout,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    date: "",
    workoutSlices: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [date, setDate] = React.useState(initialValues.date);
  const [workoutSlices, setWorkoutSlices] = React.useState(
    initialValues.workoutSlices
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = workoutRecord
      ? { ...initialValues, ...workoutRecord }
      : initialValues;
    setName(cleanValues.name);
    setDate(cleanValues.date);
    setWorkoutSlices(cleanValues.workoutSlices);
    setErrors({});
  };
  const [workoutRecord, setWorkoutRecord] = React.useState(workout);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Workout, idProp) : workout;
      setWorkoutRecord(record);
    };
    queryData();
  }, [idProp, workout]);
  React.useEffect(resetStateValues, [workoutRecord]);
  const validations = {
    name: [{ type: "Required" }],
    date: [{ type: "Required" }],
    workoutSlices: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          date,
          workoutSlices,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Workout.copyOf(workoutRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "WorkoutUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              date,
              workoutSlices,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date: value,
              workoutSlices,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <SelectField
        label="Workout slices"
        placeholder="Please select an option"
        isDisabled={false}
        value={workoutSlices}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date,
              workoutSlices: value,
            };
            const result = onChange(modelFields);
            value = result?.workoutSlices ?? value;
          }
          if (errors.workoutSlices?.hasError) {
            runValidationTasks("workoutSlices", value);
          }
          setWorkoutSlices(value);
        }}
        onBlur={() => runValidationTasks("workoutSlices", workoutSlices)}
        errorMessage={errors.workoutSlices?.errorMessage}
        hasError={errors.workoutSlices?.hasError}
        {...getOverrideProps(overrides, "workoutSlices")}
      >
        <option
          children="Single"
          value="SINGLE"
          {...getOverrideProps(overrides, "workoutSlicesoption0")}
        ></option>
        <option
          children="Multiple"
          value="MULTIPLE"
          {...getOverrideProps(overrides, "workoutSlicesoption1")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || workout)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || workout) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
