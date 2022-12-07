"use client";

import { useField } from "formik";
import React from "react";

export interface TextFieldProps {
  name: string;
  label: string;
  type?: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const [field, meta] = useField(props.name);
  const invalid = !!meta.error && meta.touched;
  const borderClass = invalid ? "border" : "";

  return (
    <div className="flex flex-col gap-1.5 relative">
      <label className="text-on-surface-light text-base" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={`px-3 py-2 text-lg text-on-surface-normal bg-surface-2 rounded-lg border-red-500 ${borderClass}`}
        id={props.name}
        {...field}
        {...props}
      />
      <div className="h-5 text-sm text-red-500">{invalid && meta.error}</div>
    </div>
  );
};

export default TextField;
