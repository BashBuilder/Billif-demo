import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sync = () => {
  return (
    <section className="bg-slate-100">
      <div className="contain mx-auto flex flex-wrap items-center justify-center gap-8 py-20 lg:gap-16">
        <div className="max-w-md space-y-4">
          <h3 className="text-orange-dark text-3xl font-semibold">
            Sync more to save time
          </h3>
          <p>
            Integrate with popular accounting and ERP solutions to auto-sync
            NextGen pay transactions and pull-in your amortization schedules,
            accelerating your accounts payable workflow.
          </p>
          <div className="pt-4">
            <Link
              href="#"
              className="rounded-full bg-primary px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div>
          <div className="flex size-80 w-screen max-w-sm items-center justify-center rounded-md bg-slate-200">
            <Image
              src="/assets/images/accountPayable/Vector.png"
              alt="Sync more to save time"
              width={500}
              height={500}
              quality={100}
              className="w-3/5 rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sync;
