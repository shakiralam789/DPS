"use client";

import ErrorMsg from "@/components/ErrorMsg";
import Button, { IconButton } from "@/components/form/Button";
import CustomSelect from "@/components/form/CustomSelect";
import Label from "@/components/form/Label";
import TextField from "@/components/form/TextField";
import useForm from "@/hook/_customUseForm";
import React, { use, useEffect } from "react";
import TrashIcon from "@/components/icons/TrashIcon";

const options = [
  { label: "DS", value: "ds" },
  { label: "WS", value: "ws" },
  { label: "MS", value: "ms" },
  { label: "YS", value: "ys" },
];

export default function Form({ userData = null }) {
  const {
    data,
    Controller,
    control,
    register,
    handleSubmit,
    errors,
    watch,
    setData,
  } = useForm(
    userData || {
      deposit_type: "",
      name: "",
      years: "",
      savings: [
        { daily_savings: "", main_savings: "", receivable_payment: "" },
      ],
    }
  );

  const savings = watch("savings");

  function addSavings() {
    setData("savings", [
      ...savings,
      { daily_savings: "", main_savings: "", receivable_payment: "" },
    ]);
  }

  function removeSavings(index) {
    setData(
      "savings",
      savings.filter((_, i) => i !== index)
    );
  }

  function onSubmit(data) {
    console.log("Form Data:", data);
    if (!userData) {
      console.log("Create user");
    } else {
      console.log("Update user");
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 2xl:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label>Deposit type</Label>
          <Controller
            name="deposit_type"
            control={control}
            rules={{ required: "Deposit type is required" }}
            render={({ field }) => (
              <>
              <CustomSelect
                {...field}
                options={options}
                placeholder="Select Deposit type"
              />
              </>
            )}
          />
          <ErrorMsg message={errors?.deposit_type?.message} />
        </div>

        <div>
          <Label>Name</Label>
          <TextField
            {...register("name", { required: "Deposit Name is required" })}
            placeholder="Enter Deposit name"
          />
          <ErrorMsg message={errors?.name?.message} />
        </div>

        <div>
          <Label>Years</Label>
          <TextField
            {...register("years", { required: "Year is required" })}
            placeholder="Enter Year"
          />
          <ErrorMsg message={errors?.years?.message} />
        </div>
      </div>

      <div>
        <div
          className={`col-span-3 grid grid-cols-3 gap-4 ${
            savings && savings.length > 1 ? "pr-[36px]" : ""
          }`}
        >
          <Label className="hidden sm:block">Daily savings</Label>
          <Label className="hidden sm:block">Main savings</Label>
          <Label className="hidden sm:block">
            Possibility amount of Receivable payment
          </Label>
        </div>
        <div className="space-y-4 2xl:space-y-6">
          {savings &&
            savings.length > 0 &&
            savings.map((_, index) => (
              <div key={index} className="flex  gap-2 w-full">
                <div className="flex-1 col-span-3 grid grid-cols-3 gap-4 items-start">
                  <div>
                    <Label className="sm:hidden">Daily savings</Label>
                    <TextField
                      {...register(`savings.${index}.daily_savings`, {
                        required: "Daily savings is required",
                      })}
                      placeholder="Enter Daily savings"
                    />
                    <ErrorMsg
                      message={errors?.savings?.[index]?.daily_savings?.message}
                    />
                  </div>

                  <div>
                    <Label className="sm:hidden">Main savings</Label>
                    <TextField
                      {...register(`savings.${index}.main_savings`, {
                        required: "Main savings is required",
                      })}
                      placeholder="Enter Main savings"
                    />
                    <ErrorMsg
                      message={errors?.savings?.[index]?.main_savings?.message}
                    />
                  </div>

                  <div>
                    <Label className="sm:hidden">
                      Possibility amount of Receivable payment
                    </Label>
                    <TextField
                      {...register(`savings.${index}.receivable_payment`, {
                        required: "Receivable payment is required",
                      })}
                      placeholder="Enter Receivable payment"
                    />
                    <ErrorMsg
                      message={
                        errors?.savings?.[index]?.receivable_payment?.message
                      }
                    />
                  </div>
                </div>
                {savings.length > 1 && (
                  <IconButton
                    className="h-full mt-5 sm:mt-0"
                    variant="danger"
                    onClick={() => removeSavings(index)}
                    icon={<TrashIcon />}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 2xl:mt-6">
        <Button type="submit">{userData ? "Update" : "Save"} Rule</Button>
        <Button type="button" variant="stroke" plus={true} onClick={addSavings}>
          Add Savings Entry
        </Button>
      </div>
    </form>
  );
}
