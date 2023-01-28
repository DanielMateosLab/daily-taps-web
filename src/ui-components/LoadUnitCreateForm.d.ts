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
export declare type LoadUnitCreateFormInputValues = {
    name?: string;
};
export declare type LoadUnitCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoadUnitCreateFormOverridesProps = {
    LoadUnitCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LoadUnitCreateFormProps = React.PropsWithChildren<{
    overrides?: LoadUnitCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LoadUnitCreateFormInputValues) => LoadUnitCreateFormInputValues;
    onSuccess?: (fields: LoadUnitCreateFormInputValues) => void;
    onError?: (fields: LoadUnitCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LoadUnitCreateFormInputValues) => LoadUnitCreateFormInputValues;
    onValidate?: LoadUnitCreateFormValidationValues;
} & React.CSSProperties>;
export default function LoadUnitCreateForm(props: LoadUnitCreateFormProps): React.ReactElement;
