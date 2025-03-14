import Button from "@/components/form/Button";
import { SelectSet, TextFieldSet } from "@/components/form/FieldSet";
import useForm from "@/hook/_customUseForm";
import { currentStep } from "./DepositStep";
import SectionTitle from "../../partial/SectionTitle";
import { useRouter } from "nextjs-toploader/app";

export default function FieldOfficerInfo({
  formData,
  setTotalData,
  totalData,
}) {
  const router = useRouter();
  const {
    reset,
    control,
    register,
    post,
    put,
    errors,
    handleSubmit,
  } = useForm(formData || {});

  function onSubmit(data) {
    currentStep.value = 4;

    let copyData = { ...totalData };

    let newData = {
      ...copyData,
      field_officer_details: data,
    };

    setTotalData(newData);

    router.push("/dps");

    if (!formData) {
      console.log("create user");
    } else {
      console.log("update user");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"receipt_number"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"deposit_name"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"account_number"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"installment"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"top_deposited_amount"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"duration"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"starting_date"}
              errors={errors}
              register={register}
            />
          </div>
        </div>

        <SectionTitle>For Maturity Use</SectionTitle>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"account_number"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"installment"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"total_earned_profit"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"deposit_name"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"total_installment_count"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"service_charge"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <SelectSet
              errors={errors}
              control={control}
              fieldName={"validity"}
              options={[
                { label: "1 Year", value: "1 Year" },
                { label: "2 Year", value: "2 Year" },
              ]}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"total_paid_savings"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"vat"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"savings"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"absence_months"}
              errors={errors}
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextFieldSet
              fieldName={"total_receivable"}
              errors={errors}
              register={register}
            />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 2xl:mt-6">
          <Button type="button" onClick={reset} variant="danger">
            Reset
          </Button>
          <Button type="submit">Finish</Button>
        </div>
      </form>
    </>
  );
}
