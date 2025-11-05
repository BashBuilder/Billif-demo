import { dashboardLink } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Manage = () => {
  return (
    <section className="bg-primary py-20">
      <div className="contain flex items-center justify-center gap-8 max-md:flex-col">
        <div className="basis-3/5 space-y-8">
          <h1 className="max-w-md font-heading text-4xl font-semibold text-white max-md:text-center">
            Manage spending before it occurs.
          </h1>
          <p className="text-orange-50/90">
            Manual spend approval processes are full of errors and lengthy email
            chains, causing slow approvals and poor spending visibility.
            Billif’s automated approval workflows solve these problems. With
            custom rules and budget integration, Billif ensures purchases stay
            within spending limits and enables informed decision-making before
            approvals.
          </p>
          <ul className="space-y-10 *:relative *:ml-10 *:before:absolute *:before:-left-10 *:before:h-full *:before:w-px *:before:rounded-full *:before:bg-white">
            <li>
              <h3 className="text-xl font-medium text-white">
                Faster approvals
              </h3>
              <p className="font-thin text-white/70">
                Replace slow email chains with streamlined, automated workflows.
              </p>
            </li>
            <li>
              <h3 className="font-heading text-xl font-medium text-white">
                End-to-end visibility
              </h3>
              <p className="font-heading font-thin text-white/70">
                Gain real-time insights into your spending before you make
                approvals.
              </p>
            </li>
            <li>
              <h3 className="font-heading text-xl font-medium text-white">
                Increased spend control
              </h3>
              <p className="font-thin text-white/70">
                Set custom rules and enforce spending limits for compliance.
              </p>
            </li>
          </ul>
          <div>
            <Link
              href={dashboardLink}
              className="cursor-pointer rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
            >
              Get started
            </Link>
          </div>
        </div>
        <div className="basis-2/5">
          <div className="relative mx-auto flex w-fit items-center justify-center">
            <div className="absolute right-10 top-10 h-full w-full border border-white/80" />
            <Image
              src="/assets/images/image-control_spending_before_it_happens.png.png"
              alt="Manage approval requests"
              width={300}
              height={500}
              quality={100}
              className="relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manage;
