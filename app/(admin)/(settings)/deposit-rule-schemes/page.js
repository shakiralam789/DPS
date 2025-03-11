"use client";
import { Button } from "@/components/form/Button";
import Page from "../../partial/Page";
import { CogIcon } from "@heroicons/react/24/outline";
import DepositRulesSchemes from "./partial/DepositRuleSchemes";

export default function Users() {
  return (
    <Page
      title={"DPS rule schemes"}
      Icon={CogIcon}
      backBtn={false}
      additional={() => (
        <Button href={"/deposit-rule-schemes/add-deposit-rule"} plus={true}>
          Add new rules
        </Button>
      )}
    >
      <div className="grid grid-cols-2 gap-4 2xl:gap-6">
        <DepositRulesSchemes />
      </div>
    </Page>
  );
}
