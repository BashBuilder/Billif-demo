import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ApAutomation = () => {
  return (
    <section className="contain space-y-6 py-20">
      <h2 className="text-orange-dark mx-auto max-w-xl text-center text-3xl font-semibold">
        AP automation software that does more
      </h2>
      <div className="flex flex-wrap justify-center gap-10 pt-4">
        <div className="max-w-64 space-y-3">
          <div className="flex h-[80vw] max-h-48 w-full items-center justify-center rounded-md bg-slate-100 p-10 shadow-md">
            {/* <Image
                src={step.image}
                alt={step.label}
                width={100}
                height={100}
                className="w-3/5"
              /> */}
          </div>
          <p className="">
            With NextGen automations you can pay from anywhere.
          </p>
          <div className="">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-full py-2 text-sm"
            >
              <span>Explore automation</span>
              <span>
                <MoveRight className="mt-1 size-4 text-slate-500" />
              </span>
            </Link>
          </div>
        </div>
        <div className="max-w-64 space-y-3">
          <div className="flex h-[80vw] max-h-48 w-full items-center justify-center rounded-md bg-orange-100 p-10 shadow-md">
            {/* <Image
                src={step.image}
                alt={step.label}
                width={100}
                height={100}
                className="w-3/5"
              /> */}
          </div>
          <p className="">
            Extend payment terms on your bills and smooth out cash flows in
            seconds.
          </p>
          <div className="">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-full py-2 text-sm"
            >
              <span>Explore automation</span>
              <span>
                <MoveRight className="mt-1 size-4 text-slate-500" />
              </span>
            </Link>
          </div>
        </div>

        <div className="max-w-64 space-y-3">
          <div className="flex h-[80vw] max-h-48 w-full items-center justify-center rounded-md bg-orange-100 p-10 shadow-md">
            {/* <Image
                src={step.image}
                alt={step.label}
                width={100}
                height={100}
                className="w-3/5"
              /> */}
          </div>
          <p className="">
            NextGen easily monitors your transactions for ease of operations
          </p>
          <div className="">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-full py-2 text-sm"
            >
              <span>Explore automation</span>
              <span>
                <MoveRight className="mt-1 size-4 text-slate-500" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApAutomation;
