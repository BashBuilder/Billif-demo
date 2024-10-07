// import Faq from "@/components/global/Faq";
import GetStarted from "@/components/modules/general/GetStarted";
import Support from "@/components/modules/general/Support";
import React from "react";
import PricingDetail from "./PricingDetail";

const page = () => {
  return (
    <main>
      <PricingDetail />
      <Support />
      {/* <Faq /> */}
      <GetStarted />
    </main>
  );
};

export default page;
