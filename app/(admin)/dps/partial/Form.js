"use client";
import React from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";
import NomineeInfo from "./NomineeInfo";
import { currentStep } from "./DepositStep";
import FieldOfficerInfo from "./FieldOfficerInfo";
export default function Form({ data = null, setTotalData, totalData }) {
  return (
    <>
      {currentStep == 1 ? (
        <PersonalDetailsForm
          setTotalData={setTotalData}
          formData={data.applicant_personal_details}
          totalData={totalData}
        />
      ) : (
        <>
          {currentStep == 2 ? (
            <NomineeInfo
              setTotalData={setTotalData}
              formData={data.nominee_details}
              totalData={totalData}
            />
          ) : (
            <>
              <FieldOfficerInfo
                setTotalData={setTotalData}
                totalData={totalData}
                formData={data.field_officer_details}
              />
            </>
          )}
        </>
      )}
    </>
  );
}
