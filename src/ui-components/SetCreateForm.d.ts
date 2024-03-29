/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SetCreateFormInputValues = {
    restTime?: number;
};
export declare type SetCreateFormValidationValues = {
    restTime?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SetCreateFormOverridesProps = {
    SetCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    restTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SetCreateFormProps = React.PropsWithChildren<{
    overrides?: SetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SetCreateFormInputValues) => SetCreateFormInputValues;
    onSuccess?: (fields: SetCreateFormInputValues) => void;
    onError?: (fields: SetCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SetCreateFormInputValues) => SetCreateFormInputValues;
    onValidate?: SetCreateFormValidationValues;
} & React.CSSProperties>;
export default function SetCreateForm(props: SetCreateFormProps): React.ReactElement;
