import { dashboardLink } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhyNextgen = () => {
  return (
    <section className="contain space-y-4 py-20">
      <h2 className="text-orange-dark font-heading mx-auto max-w-lg text-center text-4xl font-medium">
        For startups, global enterprises, and everyone in between.
      </h2>
      <p className="text-center">
        Simple defaults, direct integrations, and advanced customization means
        Ramp will scale with you.
      </p>
      <div className="flex flex-wrap justify-center gap-6 pt-6">
        <section className="w-4/5 space-y-2 md:max-w-60">
          <div className="flex h-40 w-full items-center justify-center gap-6 rounded-sm bg-slate-100">
            <Image
              src="/assets/Svg/xerologo.svg"
              alt="Integrate and stay synced"
              width={60}
              height={60}
              quality={100}
            />
            <Image
              src="/assets/Svg/sagelogo.svg"
              alt="Integrate and stay synced"
              width={60}
              height={60}
              quality={100}
            />
          </div>
          <h5 className="text-orange-dark font-heading text-lg font-semibold">
            Integrate and stay synced
          </h5>
          <p className="text-sm text-slate-500">
            Easily integrate NextGen with your accounting systems and streamline
            your finances.
          </p>
        </section>
        <section className="w-4/5 space-y-2 md:max-w-60">
          <div className="flex h-40 w-full items-center justify-center gap-6 rounded-sm bg-slate-100">
            <Image
              src="/assets/images/home/image.png"
              alt="Integrate and stay synced"
              width={120}
              height={120}
              quality={100}
            />
          </div>
          <h5 className="text-orange-dark font-heading text-lg font-semibold">
            Operate globally
          </h5>
          <p className="text-sm text-slate-500">
            Send payments from anywhere you are immediately.
          </p>
        </section>
        <section className="w-4/5 space-y-2 md:max-w-60">
          <div className="flex h-40 w-full items-center justify-center gap-6 rounded-sm bg-slate-100">
            <Image
              src="/assets/images/home/flexible smartphone interface with checklist.png"
              alt="Integrate and stay synced"
              width={120}
              height={120}
              quality={100}
            />
          </div>
          <h5 className="text-orange-dark font-heading text-lg font-semibold">
            Completely flexible
          </h5>
          <p className="text-sm text-slate-500">
            Customize NextGen to fit your business and give you the controls.
          </p>
        </section>
        <section className="w-4/5 space-y-2 md:max-w-60">
          <div className="flex h-40 w-full items-center justify-center gap-6 rounded-sm bg-slate-100">
            <Image
              src="/assets/images/home/young woman in headphones sitting in front of laptop and waving.png"
              alt="Integrate and stay synced"
              width={120}
              height={120}
              quality={100}
              className=""
            />
          </div>
          <h5 className="text-orange-dark font-heading text-lg font-semibold">
            An extension of your team
          </h5>
          <p className="text-sm text-slate-500">
            Get dedicated support anytime, anywhere. We&apos;re always ready to
            help.
          </p>
        </section>
      </div>
      <div className="flex items-center justify-center pt-4">
        <Link
          href={dashboardLink}
          className="rounded-full bg-primary px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default WhyNextgen;
