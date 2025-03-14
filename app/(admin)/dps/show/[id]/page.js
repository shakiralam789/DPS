"use client";
import React from "react";
import Page from "@/app/(admin)/partial/Page";
import SectionTitle from "@/app/(admin)/partial/SectionTitle";
import UsersIcon from "@/components/icons/UsersIcon";
import TransactionReportTable from "../../partial/TransactionReportTable";
import { useParams } from "next/navigation";
import InfoRow from "@/app/(admin)/partial/InfoRow";

export default function CreateUser() {
  const { id } = useParams();
  return (
    <Page title={"Deposit View"} Icon={UsersIcon}>
      <div className="box-section">
        <SectionTitle>Md. Aminul Islam</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* Left Column */}
          <div className="space-y-1.5">
            <InfoRow label="Account Number" value="54785457854" />
            <InfoRow label="Deposit Type" value="(DS)" />
            <InfoRow label="Deposit Name" value="Daily Savings" />
            <InfoRow label="Duration" value="3 Years" />
          </div>

          {/* Right Column */}
          <div className="space-y-1.5">
            <InfoRow label="Starting date" value="5 / 02 / 2025" />
            <InfoRow label="Ending date" value="5 / 02 / 2028" />
            <InfoRow label="Amount" value="৳1,27,375" />
          </div>
        </div>
      </div>
      <div className="box-section">
        <SectionTitle className="mb-4 2xl:mb-6">
          Transaction report
        </SectionTitle>
        <TransactionReportTable showId={id}/>
      </div>
    </Page>
  );
}
