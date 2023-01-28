/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Set } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SetUpdateFormInputValues = {
    restTime?: number;
};
export declare type SetUpdateFormValidationValues = {
    restTime?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SetUpdateFormOverridesProps = {
    SetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    restTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SetUpdateFormProps = React.PropsWithChildren<{
    overrides?: SetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    set?: Set;
    onSubmit?: (fields: SetUpdateFormInputValues) => SetUpdateFormInputValues;
    onSuccess?: (fields: SetUpdateFormInputValues) => void;
    onError?: (fields: SetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SetUpdateFormInputValues) => SetUpdateFormInputValues;
    onValidate?: SetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SetUpdateForm(props: SetUpdateFormProps): React.ReactElement;
