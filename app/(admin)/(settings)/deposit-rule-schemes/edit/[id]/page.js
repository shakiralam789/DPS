"use client";
import React from "react";
import Page from "@/app/(admin)/partial/Page";
import SectionTitle from "@/app/(admin)/partial/SectionTitle";
import Form from "../../partial/Form";
import UsersIcon from "@/components/icons/UsersIcon";
import { useParams } from "next/navigation";
export default function Edit() {
  const {id}  = useParams();
  return (
    <Page title={"Update User"} Icon={UsersIcon}>
      <div className="box-section">
        <SectionTitle>Edit users</SectionTitle>
        <Form
          userData={{
            id: 1,
            deposit_type:id.toLocaleLowerCase(),
            years: "3 years",
            name: "MD Aminul Islam",
            savings: [
              {
                id: 1,
                daily_savings: "23",
                main_savings: "30",
                receivable_payment: "34",
              },
            ],
          }}
        />
      </div>
    </Page>
  );
}
