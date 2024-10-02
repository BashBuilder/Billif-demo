import Fade from "@/components/global/fade";
import { dashboardLink } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Pageprops {
  title: string;
  steps: { label: string; image: string }[];
}

const AccountSteps = ({ title, steps }: Pageprops) => {
  return (
    <section className="contain space-y-6 py-20">
      <Fade>
        <h2 className="font-heading text-orange-dark mx-auto max-w-screen-lg text-center text-4xl font-semibold">
          {title}
        </h2>
      </Fade>
      <div className="flex flex-wrap items-center justify-center gap-10 pt-4">
        {steps.map((step) => (
          <Fade key={step.label} className="space-y-3">
            <div className="mx-auto flex h-[80vw] max-h-48 w-[80vw] max-w-48 items-center justify-center rounded-md bg-orange-100 p-10 shadow-md max-[365px]:max-w-full">
              <Image
                src={step.image}
                alt={step.label}
                width={100}
                height={100}
                className="h-full w-3/5 object-contain"
              />
            </div>
            <p className="font-semibold"> {step.label} </p>
          </Fade>
        ))}
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

export default AccountSteps;
