import Link from "next/link";
import React from "react";

const Easysetup = () => {
  return (
    <section className="bg-slate-100">
      <div className="contain mx-auto flex flex-wrap items-center justify-center gap-8 py-20 lg:gap-16">
        <div className="max-w-md space-y-4">
          <h3 className="text-orange-dark text-3xl font-semibold">
            Easily setup your invoice
          </h3>
          <p>
            There are multiple ways to quickly import your invoices into
            NextGen, with little to no manual entry required.
          </p>
          <div className="pt-4">
            <Link
              href="#"
              className="rounded-full bg-primary px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div>
          <div className="size-80 w-screen max-w-sm rounded-md bg-slate-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Easysetup;
