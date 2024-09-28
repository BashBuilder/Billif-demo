import Link from "next/link";
import React from "react";

const WhyNextgen = () => {
  return (
    <article className="contain space-y-4 py-20">
      <h2 className="text-orange-dark mx-auto max-w-lg text-center text-3xl font-medium">
        For startups, global enterprises, and everyone in between.
      </h2>
      <p className="text-center">
        Simple defaults, direct integrations, and advanced customization means
        Ramp will scale with you.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
        <section className="max-w-52 space-y-px">
          <div className="h-40 w-full rounded-md bg-slate-100"></div>
          <h5 className="text-lg font-semibold">Integrate and stay synced</h5>
          <p className="text-sm text-slate-500">
            Easily integrate NextGen with your accounting systems and streamline
            your finances.
          </p>
        </section>
        <section className="max-w-52 space-y-px">
          <div className="h-40 w-full rounded-sm bg-slate-100"></div>
          <h5 className="text-lg font-semibold">Integrate and stay synced</h5>
          <p className="text-sm text-slate-500">
            Easily integrate NextGen with your accounting systems and streamline
            your finances.
          </p>
        </section>
        <section className="max-w-52 space-y-px">
          <div className="h-40 w-full rounded-sm bg-slate-100"></div>
          <h5 className="text-lg font-semibold">Integrate and stay synced</h5>
          <p className="text-sm text-slate-500">
            Easily integrate NextGen with your accounting systems and streamline
            your finances.
          </p>
        </section>
        <section className="max-w-52 space-y-px">
          <div className="h-40 w-full rounded-sm bg-slate-100"></div>
          <h5 className="text-lg font-semibold">Integrate and stay synced</h5>
          <p className="text-sm text-slate-500">
            Easily integrate NextGen with your accounting systems and streamline
            your finances.
          </p>
        </section>
      </div>
      <div className="flex items-center justify-center pt-4">
        <Link
          href="#"
          className="rounded-full bg-primary px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80"
        >
          Get Started
        </Link>
      </div>
    </article>
  );
};

export default WhyNextgen;
