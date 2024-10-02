import Fade from "@/components/global/fade";
import { dashboardLink } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Heading = () => {
  return (
    <section className="relative pb-20 pt-32">
      <Image
        src="/assets/images/approvalImage.png"
        alt="Approval software"
        layout="fill"
        objectFit="cover"
        className="absolute left-0 top-0 opacity-20"
        objectPosition="center"
      />
      <div className="contain relative space-y-8 text-center">
        <Fade>
          <p className="text-center">Approval software</p>
        </Fade>
        <Fade>
          <h1 className="text-orange-dark font-heading text-center text-5xl font-semibold">
            Optimize Your Approval Process
          </h1>
        </Fade>
        <Fade>
          <p className="mt-8 text-center text-lg">
            NextGen’s approval software provides the insights you need to make
            informed decisions and meet your team’s needs, all while staying
            within budget.
          </p>
        </Fade>
        <div className="flex items-center justify-center gap-8">
          <Fade>
            <Link
              href={dashboardLink}
              className="cursor-pointer rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/80"
            >
              Explore our platform
            </Link>
          </Fade>
          <Fade>
            <Link
              href={dashboardLink}
              className="cursor-pointer rounded-full border-2 border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary/20"
            >
              Request a demo
            </Link>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Heading;
