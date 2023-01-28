/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LoadUnit } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LoadUnitUpdateFormInputValues = {
    name?: string;
};
export declare type LoadUnitUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoadUnitUpdateFormOverridesProps = {
    LoadUnitUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LoadUnitUpdateFormProps = React.PropsWithChildren<{
    overrides?: LoadUnitUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    loadUnit?: LoadUnit;
    onSubmit?: (fields: LoadUnitUpdateFormInputValues) => LoadUnitUpdateFormInputValues;
    onSuccess?: (fields: LoadUnitUpdateFormInputValues) => void;
    onError?: (fields: LoadUnitUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LoadUnitUpdateFormInputValues) => LoadUnitUpdateFormInputValues;
    onValidate?: LoadUnitUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LoadUnitUpdateForm(props: LoadUnitUpdateFormProps): React.ReactElement;
