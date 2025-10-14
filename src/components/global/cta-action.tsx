import { CheckCircle } from "lucide-react";
// import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

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
            {/* <Link href=""> */}
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
            {/* </Link> */}
            {/* <Link href="/solutions"> */}
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
            >
              View Solutions
            </Button>
            {/* </Link> */}
          </div>
          <div className="mt-6 flex items-center justify-center text-sm opacity-80">
            <CheckCircle className="mr-2 h-4 w-4" />
            30-day free trial • No setup fees • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaAction;
