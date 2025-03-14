import React from "react";
import Label from "./Label";
import TextField from "./TextField";
import ErrorMsg from "../ErrorMsg";
import TextArea from "./TextArea";
import { Controller } from "react-hook-form";
import CustomSelect from "./CustomSelect";

export function TextFieldSet({
  required = true,
  register,
  errors,
  fieldName,
  validation = {},
}) {
  let finalValidation = {
    required: required ? `${fieldName?.split("_").join(" ")} is required` : false,
    ...validation,
  };

  return (
    <>
      <Label>{fieldName?.split("_").join(" ")}</Label>
      <TextField
        {...register(fieldName, finalValidation)}
        placeholder={`Enter ${fieldName?.split("_").join(" ")}`}
      />
      <ErrorMsg message={errors?.[fieldName]?.message} />
    </>
  );
}

export function TextAreaSet({
  required = true,
  register,
  errors,
  fieldName,
  validation = {},
}) {
  let finalValidation = {
    required: required ? `${fieldName?.split("_").join(" ")} is required` : false,
    ...validation,
  };

  return (
    <>
      <Label>{fieldName?.split("_").join(" ")}</Label>
      <TextArea
        {...register(fieldName, finalValidation)}
        placeholder={`Enter ${fieldName?.split("_").join(" ")}`}
      />
      <ErrorMsg message={errors?.[fieldName]?.message} />
    </>
  );
}

export function SelectSet({
  control,
  required = true,
  errors,
  fieldName,
  validation = {},
  options = [],
}) {
  let finalValidation = {
    required: required
      ? `${fieldName?.split("_").join(" ")} is required`
      : false,
    ...validation,
  };
  return (
    <>
      <Label>{fieldName?.split("_").join(" ")}</Label>

      <Controller
        name={fieldName}
        control={control}
        rules={finalValidation}
        render={({ field }) => (
          <>
            <CustomSelect
              {...field}
              options={options}
              placeholder={`Select ${fieldName?.split("_").join(" ")}`}
            />
          </>
        )}
      />
      <ErrorMsg message={errors?.[fieldName]?.message} />
    </>
  );
}
