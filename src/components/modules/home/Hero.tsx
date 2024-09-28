import SubmitEmailForm from "@/components/global/SubmitEmailForm";
import TopographySvg from "@/components/global/TopographySvg";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-orange-50">
      <main className="contain relative grid gap-6 overflow-hidden lg:grid-cols-2">
        <TopographySvg
          color="black"
          className="absolute -bottom-[50%] -left-[25%] rotate-90 opacity-50"
        />
        <TopographySvg
          color="white"
          className="absolute -right-[25%] -top-[50%] z-40 rotate-12"
        />
        <section className="flex w-full flex-col gap-8 pt-32 max-lg:items-center max-lg:text-center lg:max-w-lg lg:pb-20">
          <h1 className="text-6xl font-semibold">
            Value your time and money. <br /> Save both.
          </h1>
          <div className="h-px w-4/5 rounded-full bg-primary" />
          <p className="text-slate-700">
            The smart way to handle bills, invoices, expenses, budgets, and
            business credit—all in one platform.
          </p>
          <SubmitEmailForm />
        </section>
        <section className="relative min-h-full max-lg:py-10">
          <div className="absolute -right-[15vw] -top-[10vw] h-[53vw] w-[53vw] rounded-full bg-black max-lg:-z-10" />
          <Image
            src="/assets/images/hero image 1.png"
            alt="nextgen dashboard image"
            width={1500}
            height={1500}
            quality={100}
            className="-right-32 top-40 lg:absolute lg:scale-125"
          />
          <Image
            src="/assets/images/hero overlay.png"
            alt="nextgen dashboard image"
            width={250}
            height={250}
            quality={100}
            className="absolute bottom-4 right-20 max-lg:w-1/2 lg:bottom-10"
          />
        </section>
      </main>
    </div>
  );
};

export default Hero;
