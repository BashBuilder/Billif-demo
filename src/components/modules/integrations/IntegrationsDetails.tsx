import { integrationsData } from "@/data/data";
import { dashboardLink } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IntegrationsDetails = () => {
  return (
    <section className="bg-orange-100/50 py-20">
      <div className="contain space-y-10">
        {integrationsData.map((item, index) => (
          <div
            key={item.title}
            className="flex items-center justify-around gap-12 space-y-8 max-md:flex-col"
          >
            <div className="basis-1/2 space-y-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={100}
                height={100}
                className={`${index === 0 && "w-full max-w-52"}`}
              />
              <div className="space-y-2">
                <h3 className="font-heading text-orange-dark text-3xl font-semibold">
                  {item.title}
                </h3>
                <div className="h-1 w-full rounded-full bg-primary" />
              </div>
              <p> {item.description} </p>
              <div className="">
                <Link
                  href={dashboardLink}
                  className="rounded-full bg-primary px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80"
                >
                  Request demo
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex h-[20vw] w-[20vw] items-center justify-center rounded-full bg-orange-200 p-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1500}
                  height={1500}
                  quality={100}
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationsDetails;
