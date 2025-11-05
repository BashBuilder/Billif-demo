import Faq from "@/components/global/Faq";
import AccountHeading from "@/components/modules/accountpayable/AccountHeading";
import AccountSteps from "@/components/modules/accountpayable/AcountSteps";
import ApAutomation from "@/components/modules/accountpayable/ApAutomation";
import Easysetup from "@/components/modules/accountpayable/Easysetup";
import Sync from "@/components/modules/accountpayable/Sync";
import ContactUs from "@/components/modules/general/GetStarted";
import { accountPayableSteps } from "@/data/data";
import { ApSolution } from "@/data/faq";
import React from "react";

const page = () => {
  return (
    <main>
      <AccountHeading
        image="/assets/images/home/clothings.png"
        title="Speed up accounts payable with Billif."
        subtitle="Account payable"
        description="Billif automates your entire accounts payable process, ensuring every bill is recorded, approved, and paid without any data entry or repetitive tasks"
      />
      <AccountSteps
        title="Make business payments in four easy steps"
        steps={accountPayableSteps}
      />
      <Easysetup />
      <ApAutomation />
      <Sync />
      <Faq faq={ApSolution} />
      <ContactUs />
    </main>
  );
};

export default page;
