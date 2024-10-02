import Fade from "@/components/global/fade";
import { dashboardLink } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Levelup = () => {
  return (
    <section className="contain space-y-6 py-20">
      <Fade>
        <h2 className="text-orange-dark font-heading text-center text-4xl font-semibold">
          Level up with NextGen Integrations
        </h2>
      </Fade>
      <div className="flex flex-wrap items-center justify-center gap-10">
        <Fade className="flex w-full max-w-48 flex-col items-center space-y-3 rounded-md border border-slate-500/10 p-8 text-center shadow-sm">
          <Image
            src="/assets/images/integrations/earth.png"
            alt="make payment anywhere"
            width={100}
            height={100}
            className="max-h-16 object-contain"
          />
          <p className="text-sm font-semibold">Make payment anywhere</p>
        </Fade>
        <Fade className="flex w-full max-w-48 flex-col items-center space-y-3 rounded-md border border-slate-500/10 p-8 text-center shadow-sm">
          <Image
            src="/assets/images/integrations/EULA.png"
            alt="make payment anywhere"
            width={100}
            height={100}
            className="max-h-16 object-contain"
          />
          <p className="text-sm font-semibold">Automate manual tasks</p>
        </Fade>
        <Fade className="flex w-full max-w-48 flex-col items-center space-y-3 rounded-md border border-slate-500/10 p-8 text-center shadow-sm">
          <Image
            src="/assets/images/integrations/magnifying glass.png"
            alt="make payment anywhere"
            width={100}
            height={100}
            className="max-h-16 object-contain"
          />
          <p className="text-sm font-semibold">
            Accounting tools at your disposal
          </p>
        </Fade>
      </div>
      <Fade className="flex items-center justify-center pt-4">
        <Link
          href={dashboardLink}
          className="rounded-full bg-primary px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80"
        >
          Get Started
        </Link>
      </Fade>
    </section>
  );
};

export default Levelup;
