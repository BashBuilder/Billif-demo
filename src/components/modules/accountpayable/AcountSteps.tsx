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
      <h2 className="mx-auto max-w-xl text-center text-3xl font-semibold">
        {title}
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-10 pt-4">
        {steps.map((step) => (
          <div key={step.label} className="space-y-3">
            <div className="flex h-[80vw] max-h-32 w-[80vw] items-center justify-center rounded-md bg-orange-100 p-10 shadow-md md:max-w-48">
              <Image
                src={step.image}
                alt={step.label}
                width={100}
                height={100}
                className="w-3/5"
              />
            </div>
            <p className="font-semibold"> {step.label} </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-4">
        <Link
          href="#"
          className="rounded-full bg-primary px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default AccountSteps;
