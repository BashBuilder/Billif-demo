import Fade from "@/components/global/fade";
import SubmitEmailForm from "@/components/global/SubmitEmailForm";
import React from "react";

const GetStarted = () => {
  return (
    <section className="bg-orange-dark py-20">
      <div className="contain">
        <Fade className="mx-auto space-y-5 rounded-lg bg-white/50 p-4 backdrop:blur sm:w-4/5 sm:p-10">
          <h2 className="font-heading text-center text-2xl font-semibold text-white md:text-3xl">
            Get started with your NextGen account today
          </h2>
          <div className="">
            <SubmitEmailForm />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default GetStarted;
