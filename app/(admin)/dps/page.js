"use client";
import { Button } from "@/components/form/Button";
import Filter from "../partial/Filter";
import Page from "../partial/Page";
import DPSTableDesign from "./partial/DPSTable";
import DPSIcon from "@/components/icons/DPSIcon";

export default function DPS() {
  return (
    <Page title={"Deposit list"} Icon={DPSIcon}>
      <div className="box-section">
        <Filter onChange={(e) => console.log(e)}>
          <Button href={"/dps/create"} plus={true}>
            Add new DPS
          </Button>
        </Filter>
        <DPSTableDesign />
      </div>
    </Page>
  );
}
