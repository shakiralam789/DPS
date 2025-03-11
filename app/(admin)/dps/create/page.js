"use client";
import React from "react";
import Page from "../../partial/Page";
import SectionTitle from "../../partial/SectionTitle";
import Form from "../partial/Form";
import DPSIcon from "@/components/icons/DPSIcon";
import DepositStep from "../partial/DepositStep";

export default function CreateUser() {
  return (
    <Page title={"Create DPS"} Icon={DPSIcon}>
      <div className="w-10/12 mx-auto mb-6 2xl:mb-8">
        <DepositStep />
      </div>
      <div className="box-section">
        <SectionTitle>Applicant's Personal Details</SectionTitle>
        <Form />
      </div>
    </Page>
  );
}
