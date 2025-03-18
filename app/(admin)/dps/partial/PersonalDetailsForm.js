import ErrorMsg from "@/components/ErrorMsg";
import Button from "@/components/form/Button";
import CheckBox from "@/components/form/CheckBox";
import CustomSelect from "@/components/form/CustomSelect";
import FileUpload from "@/components/form/FileUpload";
import Label from "@/components/form/Label";
import TextArea from "@/components/form/TextArea";
import TextField from "@/components/form/TextField";
import useForm from "@/hook/_customUseForm";
import { currentStep } from "./DepositStep";
import { FileUploadSet } from "@/components/form/FieldSet";
import { signal } from "@preact/signals-core";
import { useSignal } from "@/hook/useSignal";
import { useEffect, useRef } from "react";

const options = [
  { label: "DS", value: "ds" },
  { label: "WS", value: "ws" },
  { label: "MS", value: "ms" },
  { label: "YS", value: "ys" },
];

export const personalDetailsFormData = signal(null);

export default function PersonalDetailsForm({
  formData,
  setTotalData,
  totalData,
}) {
  const aliveData = useSignal(personalDetailsFormData);
  const isMounted = useRef(false);
  const {
    Controller,
    reset,
    setData,
    control,
    register,
    watch,
    errors,
    handleSubmit,
  } = useForm(aliveData || formData || {});

  function onSubmit(data) {
    let copyData = { ...totalData };

    let newData = {
      ...copyData,
      applicant_personal_details: data,
    };

    personalDetailsFormData.value = data;

    setTotalData(newData);

    currentStep.value = 2;

    if (!formData) {
      console.log("create user");
    } else {
      console.log("update user");
    }
  }
  const permanentAddressSame = watch("permanent_address_same");
  const presentAddressSame = watch("present_address");

  useEffect(() => {
    if (permanentAddressSame) {
      setData("permanent_address", presentAddressSame);
    } else {
      if (isMounted.current) {
        setData("permanent_address", "");
      }
    }

    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, [permanentAddressSame, presentAddressSame]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
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
          <div className="col-start-1 col-span-4">
            <Label>Deposit name</Label>
            <TextField
              {...register("deposit_name", {
                required: "Deposit name is required",
              })}
              placeholder={"Enter your name"}
            />
            <ErrorMsg message={errors?.deposit_name?.message} />
          </div>
          <div className="col-span-4">
            <Label>Duration</Label>
            <TextField
              {...register("duration", {
                required: "Duration is required",
              })}
              placeholder={"Enter duration"}
            />
            <ErrorMsg message={errors?.duration?.message} />
          </div>
          <div className="col-span-4">
            <Label>Daily savings</Label>
            <TextField
              {...register("daily_savings", {
                required: "Daily savings is required",
              })}
              placeholder={"Enter daily savings"}
            />
            <ErrorMsg message={errors?.daily_savings?.message} />
          </div>
          <div className="col-span-3">
            <Label>Full name</Label>
            <TextField
              {...register("full_name", {
                required: "Full name is required",
              })}
              placeholder={"Enter Full name"}
            />
            <ErrorMsg message={errors?.full_name?.message} />
          </div>
          <div className="col-span-3">
            <Label>father name</Label>
            <TextField
              {...register("father_name", {
                required: "father name is required",
              })}
              placeholder={"Enter father name"}
            />
            <ErrorMsg message={errors?.father_name?.message} />
          </div>
          <div className="col-span-3">
            <Label>mother name</Label>
            <TextField
              {...register("mother_name", {
                required: "mother name is required",
              })}
              placeholder={"Enter mother name"}
            />
            <ErrorMsg message={errors?.mother_name?.message} />
          </div>
          <div className="col-span-3">
            <Label>Spouse name</Label>
            <TextField
              {...register("spouse_name", {
                required: "Spouse name is required",
              })}
              placeholder={"Enter Spouse name"}
            />
            <ErrorMsg message={errors?.spouse_name?.message} />
          </div>
          <div className="col-span-4">
            <Label>Phone number</Label>
            <TextField
              {...register("phone", { required: "Phone number is required" })}
              placeholder={"Enter your Phone number"}
            />
            <ErrorMsg message={errors?.phone?.message} />
          </div>
          <div className="col-span-4">
            <Label>Date of birth</Label>
            <TextField
              {...register("dob", { required: "Date of birth is required" })}
              placeholder={"Enter date of birth"}
            />
            <ErrorMsg message={errors?.dob?.message} />
          </div>
          <div className="col-span-4">
            <Label>National id number</Label>
            <TextField
              {...register("national_id", {
                required: "national id is required",
              })}
              placeholder={"Enter your national id number"}
            />
            <ErrorMsg message={errors?.national_id?.message} />
          </div>
          <div className="col-start-1 col-span-8">
            <Label>Present address</Label>
            <TextArea
              {...register("present_address", {
                required: "Present address is required",
              })}
              placeholder={"Enter your present address"}
            />
            <ErrorMsg message={errors?.present_address?.message} />
          </div>
          <div className="col-span-12">
            <CheckBox
              {...register("permanent_address_same")}
              label="Use this as permanent address"
            />
          </div>
          {permanentAddressSame ? null : (
            <div className="col-span-8">
              <Label>permanent address</Label>
              <TextArea
                {...register("permanent_address", {
                  required: "permanent address is required",
                })}
                placeholder={"Enter your permanent address"}
              />
              <ErrorMsg message={errors?.permanent_address?.message} />
            </div>
          )}

          <div className="col-span-3">
            <Label>Admission fee and various</Label>
            <TextField
              {...register("admission_fee", {
                required: "Admission fee is required",
              })}
              placeholder={"Enter your Admission fee"}
            />
            <ErrorMsg message={errors?.admission_fee?.message} />
          </div>
          <div className="col-span-3">
            <Label>installment amount</Label>
            <TextField
              {...register("installment_amount", {
                required: "installment amount fee is required",
              })}
              placeholder={"Enter installment amount"}
            />
            <ErrorMsg message={errors?.installment_amount?.message} />
          </div>
          <div className="col-span-3">
            <Label>Total deposited amount</Label>
            <TextField
              {...register("total_deposited_amount", {
                required: "Total deposited amount is required",
              })}
              placeholder={"Enter Total deposited amount"}
            />
            <ErrorMsg message={errors?.total_deposited_amount?.message} />
          </div>
          <div className="col-span-3">
            <Label>Deposit amount in word</Label>
            <TextField
              {...register("deposit_amount_in_word", {
                required: "Deposit amount in word is required",
              })}
              placeholder={"Write deposit amount in word"}
            />
            <ErrorMsg message={errors?.deposit_amount_in_word?.message} />
          </div>
          <div className="col-span-4">
            <Label>Upload a Photo of the Applicant</Label>
            <FileUpload {...register("photo")} />
            <ErrorMsg message={errors?.photo?.message} />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 2xl:mt-6">
          <Button type="button" onClick={reset} variant="danger">
            Reset
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </>
  );
}
