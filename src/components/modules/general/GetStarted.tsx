import Fade from "@/components/global/fade";
import { ContactUsDialog } from "@/components/global/SubmitEmailForm";
import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-primary py-20">
      <div className="contain">
        <Fade className="mx-auto max-w-screen-sm space-y-5 rounded-lg bg-white/50 p-4 backdrop:blur sm:w-4/5 sm:p-10">
          <h2 className="text-center font-heading text-2xl font-semibold text-white md:text-3xl">
            Reach out to us
          </h2>
          <div className="">
            <ContactUsDialog />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default ContactUs;
