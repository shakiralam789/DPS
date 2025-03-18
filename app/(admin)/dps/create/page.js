"use client";
import React, { useState } from "react";
import Page from "../../partial/Page";
import Form from "../partial/Form";
import DPSIcon from "@/components/icons/DPSIcon";
import DepositStep, { currentStep } from "../partial/DepositStep";
import { useSignal } from "@/hook/useSignal";
import SectionTitle from "../../partial/SectionTitle";
import { step } from "../partial/DepositStep";

export default function CreateUser() {
  const crrStep = useSignal(currentStep);
  const [totalData, setTotalData] = useState({});

  const data = {
    applicant_personal_details: {},
    nominee_details: {},
  };

  return (
    <Page title={"Create DPS"} Icon={DPSIcon}>
      <div className="w-10/12 mx-auto mb-6 2xl:mb-8">
        <DepositStep />
      </div>
      <div className="box-section relative z-30">
        <SectionTitle>{step.value[crrStep - 1]?.title || ""}</SectionTitle>
        <Form data={data} setTotalData={setTotalData} totalData={totalData} />
      </div>
    </Page>
  );
}
