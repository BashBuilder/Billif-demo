import Fade from "@/components/global/fade";
import { dashboardLink } from "@/data/links";
import Link from "next/link";
import React from "react";

const Support = () => {
  return (
    <section className="bg-orange-dark py-20">
      <div className="contain space-y-4">
        <Fade>
          <h2 className="font-heading text-center text-4xl font-semibold text-white">
            Hands-on support
          </h2>
        </Fade>
        <Fade>
          <p className="max-w-screen-lg text-center text-orange-100">
            NextGen’s team of in-house technical account managers and
            integration managers are dedicated to your success. From API setup
            to integration and deployment, we work with you to ensure our
            integrations unlock efficiency improvements for you.
          </p>
        </Fade>
        <Fade className="flex items-center justify-center pt-4">
          <Link
            href={dashboardLink}
            className="rounded-full bg-primary px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80"
          >
            Get Started
          </Link>
        </Fade>
      </div>
    </section>
  );
};

export default Support;
