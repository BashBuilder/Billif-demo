/*eslint-disable */

import Link from "next/link";
import React from "react";

const integrationsData = [
  {
    title: "Quickbooks Integrations",
    image: "/assets/Svg/quickbooks.svg",
  },
  {
    title: "Sage Integrations",
    image: "/assets/Svg/sagelogo.svg",
  },
  {
    title: "Xero Integrations",
    image: "/assets/Svg/xerologo.svg",
  },
];

const DesignedIntegration = () => {
  return (
    <section className="contain space-y-6 py-20 text-center">
      <h2 className="mx-auto max-w-xl text-3xl font-semibold">
        Designed to integrate and share data with your finance tech stack
      </h2>
      <p className="mx-auto max-w-2xl py-3">
        NextGen integrates with leading accounting software and financial tools
        to reduce manual entry, speed up reconciliation, and simplify your
        workflow.
      </p>
      <div className="flex items-center justify-center gap-8 pt-8">
        {integrationsData.map((integration) => (
          <div
            key={integration.title}
            className="flex h-40 w-80 items-center justify-center rounded-md bg-orange-100"
          >
            <img
              src={integration.image}
              alt={integration.title}
              className="h-3/5 w-4/5 object-contain"
            />
          </div>
        ))}
      </div>

      <div className="pt-5">
        <Link
          href="#"
          className="rounded-full bg-primary px-5 py-3 text-sm text-white transition-colors duration-300 hover:bg-primary/80"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default DesignedIntegration;
