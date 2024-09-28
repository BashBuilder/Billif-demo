import SubmitEmailForm from "@/components/global/SubmitEmailForm";
import React from "react";

const GetStarted = () => {
  return (
    <section className="bg-orange-dark py-20">
      <div className="contain">
        <div className="mx-auto w-4/5 space-y-5 rounded-lg bg-white/50 p-10 backdrop:blur">
          <h2 className="text-center text-3xl font-semibold text-white">
            Get started with your NextGen account today
          </h2>
          <div className="*:mxau">
            <SubmitEmailForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
