"use client";
import React, { useState } from "react";
import Page from "@/app/(admin)/partial/Page";
import SectionTitle from "@/app/(admin)/partial/SectionTitle";
import UsersIcon from "@/components/icons/UsersIcon";
import DepositProfileHeader from "@/app/(admin)/dps/partial/DepositionProfileHeader";
import InfoRow from "@/app/(admin)/partial/InfoRow";
import LoanListTable from "@/app/(admin)/dps/partial/LoanListTable";
import ProfileDPSListTable from "@/app/(admin)/dps/partial/ProfileDPSListTable";

export default function Profile() {
  const [details, setDetails] = useState("personal");
  const [list,setList] = useState('dps');
  return (
    <Page title={"Profile"} Icon={UsersIcon}>
      <div className="space-y-4 2xl:space-y-6">
        <div className="box-section">
          <DepositProfileHeader />
        </div>
        <div className="box-section">
          <div className="grid grid-cols-3">
            <SectionTitle>{details} Details</SectionTitle>
            <div className="flex justify-center items-center">
              <div className="cursor-pointer text-center text-gray-text flex gap-px items-center font-16 border rounded-md">
                <div
                  onClick={() => setDetails("personal")}
                  className={`${
                    details == "personal" ? "active" : ""
                  } px-3 2xl:px-4 py-1.5 [&.active]:text-primary-purple [&.active]:bg-gray-200 hover:bg-gray-200 hover:text-primary-purple`}
                >
                  Personal details
                </div>
                <div
                  onClick={() => setDetails("nominee")}
                  className={`${
                    details == "nominee" ? "active" : ""
                  } px-3 2xl:px-4 py-1.5 [&.active]:text-primary-purple [&.active]:bg-gray-200 hover:bg-gray-200 hover:text-primary-purple`}
                >
                  Nominee details
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {details == "personal" && <PersonalDetails />}
            {details == "nominee" && <NomineeDetails />}
          </div>
        </div>
        <div className="box-section">
          <div className="flex justify-center items-center mb-4 2xl:mb-6">
            <div className="cursor-pointer text-center text-gray-text flex gap-px items-center font-16 border rounded-md">
              <div
                onClick={() => setList("dps")}
                className={`${
                  list == "dps" ? "active" : ""
                } px-3 2xl:px-4 py-1.5 [&.active]:text-primary-purple [&.active]:bg-gray-200 hover:bg-gray-200 hover:text-primary-purple`}
              >
                DPS List
              </div>
              <div
                onClick={() => setList("loan")}
                className={`${
                  list == "loan" ? "active" : ""
                } px-3 2xl:px-4 py-1.5 [&.active]:text-primary-purple [&.active]:bg-gray-200 hover:bg-gray-200 hover:text-primary-purple`}
              >
                Loan List
              </div>
            </div>
          </div>

          {list == "dps" && <ProfileDPSListTable />}
          {list == "loan" && <LoanListTable />}
        </div>
      </div>
    </Page>
  );
}

function PersonalDetails() {
  return (
    <>
      {/* Left Column */}
      <div className="space-y-1.5">
        <InfoRow label="Full name" value="MD aminul islam" />
        <InfoRow label="Mother name" value="Mst. Amina begum" />
        <InfoRow label="Mobile number" value="01922992929" />
        <InfoRow label="National ID number" value="2937 2947 2942" />
        <InfoRow
          label="Permanent address"
          value="Islamia College Road, Boyra, Shonadanga, Khulna"
        />
      </div>

      {/* Right Column */}
      <div className="space-y-1.5">
        <InfoRow label="Father name" value="Md. Anarul Islam" />
        <InfoRow label="Spouse name" value="Md. Arifa Akter" />
        <InfoRow label="Date of birth" value="02 / 02 / 2000" />
        <InfoRow
          label="Present address"
          value="Islamia College Road, Boyra, Shonadanga, Khulna"
        />
      </div>
    </>
  );
}

function NomineeDetails() {
  return (
    <>
      {/* Left Column */}
      <div className="space-y-1.5">
        <InfoRow label="Full name" value="MD aminul islam" />
        <InfoRow label="Mother name" value="Mst. Amina begum" />
        <InfoRow label="Mobile number" value="01922992929" />
        <InfoRow label="Relation with nominee" value="Elder brother" />
        <InfoRow
          label="Permanent Address"
          value="Islamia College Road, Boyra, Shonadanga, Khulna"
        />
      </div>

      {/* Right Column */}
      <div className="space-y-1.5">
        <InfoRow label="Father name" value="Md. Anarul Islam" />
        <InfoRow label="Spouse name" value="Md. Arifa Akter" />
        <InfoRow label="Date of birth" value="02 / 02 / 2000" />
        <InfoRow
          label="Present address"
          value="Islamia College Road, Boyra, Shonadanga, Khulna"
        />
      </div>
    </>
  );
}


