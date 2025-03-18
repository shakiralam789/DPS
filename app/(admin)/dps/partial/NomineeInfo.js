import ErrorMsg from "@/components/ErrorMsg";
import Button from "@/components/form/Button";
import CheckBox from "@/components/form/CheckBox";
import {
  DatePickerSet,
  TextAreaSet,
  TextFieldSet,
} from "@/components/form/FieldSet";
import FileUpload from "@/components/form/FileUpload";
import Label from "@/components/form/Label";
import useForm from "@/hook/_customUseForm";
import { currentStep } from "./DepositStep";
import { signal } from "@preact/signals-core";
import { useSignal } from "@/hook/useSignal";
import { useRouter } from "next/navigation";
import { personalDetailsFormData } from "./PersonalDetailsForm";
import { useEffect, useRef } from "react";

const nomineeFormData = signal(null);

export default function NomineeInfo({ formData, setTotalData, totalData }) {
  const preservedDate = useSignal(nomineeFormData);
  const isMounted = useRef(false);
  const {
    watch,
    setData,
    control,
    getValues,
    reset,
    register,
    post,
    put,
    errors,
    handleSubmit,
    processing,
  } = useForm(preservedDate || formData || {});
  const router = useRouter();
  function onSubmit(data) {
    let copyData = { ...totalData };

    let newData = {
      ...copyData,
      nominee_details: data,
    };

    nomineeFormData.value = data;

    setTotalData(newData);

    let formData = new FormData();

    let photoFile = newData.applicant_personal_details.photo[0];
    let photoFile2 = newData.nominee_details.photo[0];

    let submitData = JSON.parse(JSON.stringify(newData));

    if (photoFile) {
      submitData.applicant_personal_details.photo = "";
      formData.append("applicant_personal_details.photo", photoFile);
    }

    if (photoFile2) {
      submitData.nominee_details.photo = "";
      formData.append("nominee_details.photo", photoFile2);
    }

    formData.append("data", JSON.stringify(submitData));
    console.log(formData);

    post(
      "/api/v1/apply-dps",
      { body: formData },
      {
        onSuccess: (msg) => {
          console.log(msg);
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );

    if (!processing) {
      router.push("/dps");
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
          <div className="col-span-3">
            <TextFieldSet
              fieldName={"full_name"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-3">
            <TextFieldSet
              fieldName={"father_name"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-3">
            <TextFieldSet
              fieldName={"mother_name"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-3">
            <TextFieldSet
              fieldName={"spouse_name"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-3">
            <TextFieldSet
              fieldName={"mobile_number"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-3">
            <DatePickerSet
              fieldName={"date_of_birth"}
              errors={errors}
              control={control}
            />
          </div>
          <div className="col-span-3">
            <TextFieldSet
              fieldName={"relationship_with_nominee"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-9">
            <TextAreaSet
              fieldName={"present_address"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-12">
            <CheckBox {...register("permanent_address_same")} label="Same as Present Address" />
          </div>
          {permanentAddressSame ? null : (
            <div className="col-span-9">
              <TextAreaSet
                fieldName={"permanent_address"}
                errors={errors}
                register={register}
              />
            </div>
          )}

          <div className="col-span-4">
            <Label>Upload a Photo of the Applicant</Label>
            <FileUpload {...register("photo")} />
            <ErrorMsg message={errors?.deposit_amount_in_word?.message} />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 2xl:mt-6">
          <Button
            variant="stroke"
            type="button"
            onClick={() => {
              const data = getValues();
              nomineeFormData.value = data;
              currentStep.value = 1;
            }}
          >
            Back
          </Button>
          <Button type="button" onClick={reset} variant="danger">
            Reset
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </>
  );
}
