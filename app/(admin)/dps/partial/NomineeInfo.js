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
import ModDataPicker from "@/components/form/DatePicker";

export default function NomineeInfo({ formData, setTotalData, totalData }) {
  const { control, reset, register, post, put, errors, handleSubmit } = useForm(
    formData || {}
  );

  function onSubmit(data) {
    currentStep.value = 3;

    let copyData = { ...totalData };

    let newData = {
      ...copyData,
      nominee_details: data,
    };

    setTotalData(newData);

    if (!formData) {
      console.log("create user");
    } else {
      console.log("update user");
    }
  }

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
          <div className="col-span-9">
            <TextAreaSet
              fieldName={"permanent_address"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-12">
            <CheckBox label="Same as Present Address" />
          </div>
          <div className="col-span-4">
            <Label>Upload a Photo of the Applicant</Label>
            <FileUpload
              {...register("photo", { required: "Photo is required" })}
            />
            <ErrorMsg message={errors?.deposit_amount_in_word?.message} />
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
