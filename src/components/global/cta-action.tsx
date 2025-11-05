import { CheckCircle } from "lucide-react";
// import Link from "next/link";
import React from "react";
import GetStartedBtn from "../general/get-started-btn";
import Demo from "./demo";

const CtaAction = () => {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Join hundreds of companies who&apos;ve streamlined their processes
            with our intelligent automation platform
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <GetStartedBtn />
            <Demo />
          </div>
          <div className="mt-6 flex items-center justify-center text-sm opacity-80">
            <CheckCircle className="mr-2 h-4 w-4" />
            Free Credits on Signup • No setup fees • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaAction;
