import Fade from "@/components/global/fade";
import { dashboardLink } from "@/data/links";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ApAutomation = () => {
  return (
    <section className="contain space-y-6 py-20">
      <Fade>
        <h2 className="mx-auto max-w-screen-lg text-center font-heading text-4xl font-semibold text-primary">
          AP automation software that does more
        </h2>
      </Fade>
      <div className="flex flex-wrap justify-center gap-16 pt-4">
        <div className="w-4/5 space-y-3 sm:max-w-64">
          <Fade className="flex h-[80vw] w-full items-center justify-center overflow-hidden rounded-md bg-slate-100 shadow-md max-sm:h-64 sm:max-h-48">
            <Image
              src="/assets/images/accountPayable/Screenshot 2024-09-18 201700 1.png"
              alt="AP automation software that does more"
              width={400}
              height={400}
              quality={100}
              className="mx-auto mt-16 w-4/5"
            />
          </Fade>
          <Fade>
            <p className="font-semibold text-primary">
              With Bill-if automations you can pay from anywhere.
            </p>
          </Fade>
          <Fade>
            <Link
              href={dashboardLink}
              className="flex items-center gap-2 rounded-full py-2 text-sm"
            >
              <span>Explore automation</span>
              <span>
                <MoveRight className="mt-1 size-4 text-slate-500" />
              </span>
            </Link>
          </Fade>
        </div>
        <div className="w-4/5 space-y-3 sm:max-w-64">
          <Fade className="flex h-[80vw] w-full items-center justify-center overflow-hidden rounded-md bg-slate-100 shadow-md max-sm:h-64 sm:max-h-48">
            <Image
              src="/assets/images/accountPayable/Clip path group.png"
              alt="AP automation software that does more"
              width={400}
              height={400}
              quality={100}
              className="h-full w-full object-cover"
            />
          </Fade>
          <Fade>
            <p className="font-semibold text-primary">
              Extend payment terms on your bills and smooth out cash flows in
              seconds.
            </p>
          </Fade>
          <Fade>
            <Link
              href={dashboardLink}
              className="flex items-center gap-2 rounded-full py-2 text-sm"
            >
              <span>Explore automation</span>
              <span>
                <MoveRight className="mt-1 size-4 text-slate-500" />
              </span>
            </Link>
          </Fade>
        </div>

        <div className="w-4/5 space-y-3 sm:max-w-64">
          <Fade className="flex h-[80vw] w-full items-center justify-center overflow-hidden rounded-md bg-slate-100 shadow-md max-sm:h-64 sm:max-h-48">
            <Image
              src="/assets/images/accountPayable/image 4.png"
              alt="AP automation software that does more"
              width={400}
              height={400}
              quality={100}
              className="ml-10 mt-32 h-4/5 object-cover"
            />
            f
          </Fade>
          <Fade>
            <p className="font-semibold text-primary">
              Bill-if easily monitors your transactions for ease of operations
            </p>
          </Fade>
          <Fade className="">
            <Link
              href={dashboardLink}
              className="flex items-center gap-2 rounded-full py-2 text-sm"
            >
              <span>Explore automation</span>
              <span>
                <MoveRight className="mt-1 size-4 text-slate-500" />
              </span>
            </Link>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ApAutomation;
