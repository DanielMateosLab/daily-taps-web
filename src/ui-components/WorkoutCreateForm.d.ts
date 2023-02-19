/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WorkoutCreateFormInputValues = {
    name?: string;
    date?: string;
    workoutSlices?: string;
};
export declare type WorkoutCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    workoutSlices?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutCreateFormOverridesProps = {
    WorkoutCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    workoutSlices?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type WorkoutCreateFormProps = React.PropsWithChildren<{
    overrides?: WorkoutCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WorkoutCreateFormInputValues) => WorkoutCreateFormInputValues;
    onSuccess?: (fields: WorkoutCreateFormInputValues) => void;
    onError?: (fields: WorkoutCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkoutCreateFormInputValues) => WorkoutCreateFormInputValues;
    onValidate?: WorkoutCreateFormValidationValues;
} & React.CSSProperties>;
export default function WorkoutCreateForm(props: WorkoutCreateFormProps): React.ReactElement;
