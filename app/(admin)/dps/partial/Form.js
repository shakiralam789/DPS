"use client";
import React from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";
import NomineeInfo from "./NomineeInfo";
import { currentStep } from "./DepositStep";
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
          <NomineeInfo
            setTotalData={setTotalData}
            formData={data.nominee_details}
            totalData={totalData}
          />
        </>
      )}
    </>
  );
}
