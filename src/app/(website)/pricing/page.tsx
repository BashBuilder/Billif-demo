import Faq from "@/components/global/Faq";
import ContactUs from "@/components/modules/general/GetStarted";
import React from "react";
import PricingDetail from "./PricingDetail";
import { pricingFaq } from "@/data/faq";

const page = () => {
  return (
    <main>
      <PricingDetail />
      <Faq faq={pricingFaq} />
      <ContactUs />
    </main>
  );
};

export default page;
