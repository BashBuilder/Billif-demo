import React from "react";
import Heading from "./Heading";
import Faq from "@/components/global/Faq";
import GetStarted from "@/components/modules/general/GetStarted";
import Manage from "./Manage";
import Features from "./Features";
import { approvalFaq } from "@/data/faq";

const page = () => {
  return (
    <main>
      <Heading />
      <Manage />
      <Features />
      <Faq faq={approvalFaq} />
      <GetStarted />
    </main>
  );
};

export default page;
