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
        <p className="text-center">Approval software</p>
        <h1 className="text-orange-dark font-heading text-center text-5xl font-semibold">
          Optimize Your Approval Process
        </h1>
        <p className="mt-8 text-center text-lg">
          NextGen’s approval software provides the insights you need to make
          informed decisions and meet your team’s needs, all while staying
          within budget.
        </p>
        <div className="flex items-center justify-center gap-8">
          <div>
            <Link
              href="#"
              className="cursor-pointer rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
            >
              Explore our platform
            </Link>
          </div>
          <div>
            <Link
              href="#"
              className="cursor-pointer rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
            >
              Explore our platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heading;
