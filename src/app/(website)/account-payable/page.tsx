import Faq from "@/components/global/Faq";
import AccountHeading from "@/components/modules/accountpayable/AccountHeading";
import AccountSteps from "@/components/modules/accountpayable/AcountSteps";
import ApAutomation from "@/components/modules/accountpayable/ApAutomation";
import Easysetup from "@/components/modules/accountpayable/Easysetup";
import Sync from "@/components/modules/accountpayable/Sync";
import GetStarted from "@/components/modules/general/GetStarted";
import { accountPayableSteps } from "@/data/data";
import { ApSolution } from "@/data/faq";
import React from "react";

const page = () => {
  return (
    <main>
      <AccountHeading
        image="/assets/images/home/clothings.png"
        title="Speed up accounts payable with Bill-if."
        subtitle="Account payable"
        description="Bill-if automates your entire accounts payable process, ensuring every bill is recorded, approved, and paid without any data entry or repetitive tasks"
      />
      <AccountSteps
        title="Make business payments in four easy steps"
        steps={accountPayableSteps}
      />
      <Easysetup />
      <ApAutomation />
      <Sync />
      <Faq faq={ApSolution} />
      <GetStarted />
    </main>
  );
};

export default page;
