"use client";

import React, { RefCallback, useCallback, useRef } from "react";
import { useField } from "formik";

export interface TextFieldProps {
  name: string;
  label: string;
  type?: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const [field, meta] = useField(props.name);

  return (
    <div className="flex flex-col gap-1.5 relative">
      <label className="text-on-surface-light" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className="px-3 py-2 text-lg text-on-surface-normal bg-surface-2 rounded-lg invalid:border border-red-500"
        id={props.name}
        {...field}
        {...props}
      />
      <div className="h-5 text-sm text-red-500">
        {meta.error && meta.touched && meta.error}
      </div>
    </div>
  );
};

export default TextField;
