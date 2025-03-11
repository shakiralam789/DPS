"use client";
import React from "react";
import Page from "../../../partial/Page";
import SectionTitle from "../../../partial/SectionTitle";
import Form from "../partial/Form";
import { CogIcon } from "@heroicons/react/24/outline";

export default function Create() {
  return (
    <Page title={"Add deposit rule"} Icon={CogIcon}>
      <div className="box-section">
        <SectionTitle>Deposit Rules Scheme</SectionTitle>
        <Form />
      </div>
    </Page>
  );
}
