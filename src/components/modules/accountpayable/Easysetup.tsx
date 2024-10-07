import Fade from "@/components/global/fade";
import { dashboardLink } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Easysetup = () => {
  return (
    <section className="bg-slate-100">
      <div className="contain mx-auto flex flex-wrap items-center justify-center gap-8 py-20 lg:gap-16">
        <div className="max-w-md space-y-4">
          <Fade>
            <h3 className="text-3xl font-semibold text-orange-dark">
              Easily setup your invoice
            </h3>
          </Fade>
          <Fade>
            <p>
              There are multiple ways to quickly import your invoices into
              NextGen, with little to no manual entry required.
            </p>
          </Fade>
          <Fade className="pt-4">
            <Link
              href={dashboardLink}
              className="rounded-full bg-primary px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80 max-md:hidden"
            >
              Get Started
            </Link>
          </Fade>
        </div>
        <div>
          <Fade className="size-80 w-screen max-w-sm overflow-hidden rounded-md bg-slate-200">
            <Image
              src="/assets/images/accountPayable/image 3.png"
              alt="Easily setup your invoice"
              width={450}
              height={450}
              className="mx-auto mt-20 w-4/5 rounded-sm object-contain"
            />
          </Fade>
        </div>
        <Fade className="mx-auto flex w-full items-center justify-center pt-4 md:hidden">
          <Link
            href={dashboardLink}
            className="rounded-full bg-primary px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80 md:hidden"
          >
            Get Started
          </Link>
        </Fade>
      </div>
    </section>
  );
};

export default Easysetup;
