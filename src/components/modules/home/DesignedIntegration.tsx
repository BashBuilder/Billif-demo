/*eslint-disable */

import Fade from "@/components/global/fade";
import { integrationsData } from "@/data/data";
import { dashboardLink } from "@/data/links";
import Link from "next/link";
import React from "react";

const DesignedIntegration = () => {
  return (
    <section className="contain space-y-6 py-20 text-center">
      <Fade>
        <h2 className="font-heading text-orange-dark mx-auto max-w-screen-md text-4xl font-semibold">
          Designed to integrate and share data with your finance tech stack
        </h2>
      </Fade>
      <Fade>
        <p className="mx-auto max-w-2xl py-3">
          NextGen integrates with leading accounting software and financial
          tools to reduce manual entry, speed up reconciliation, and simplify
          your workflow.
        </p>
      </Fade>
      <div className="flex items-center justify-center gap-8 pt-8">
        {integrationsData.map((integration, index) => (
          <Fade
            duration={0.5 + index * 0.3}
            key={integration.title}
            className="flex h-40 w-80 items-center justify-center rounded-md bg-orange-100 shadow-md"
          >
            <img
              src={integration.icon}
              alt={integration.title}
              className="h-3/5 w-4/5 object-contain"
            />
          </Fade>
        ))}
      </div>

      <Fade className="pt-5">
        <Link
          href={dashboardLink}
          className="rounded-full bg-primary px-5 py-3 text-sm text-white transition-colors duration-300 hover:bg-primary/80"
        >
          Get Started
        </Link>
      </Fade>
    </section>
  );
};

export default DesignedIntegration;
