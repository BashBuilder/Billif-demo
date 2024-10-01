"use client";

import SubmitEmailForm from "@/components/global/SubmitEmailForm";
import TopographySvg from "@/components/global/TopographySvg";
import Image from "next/image";
import React from "react";
import "@/styles/text-reveal.css";
import FadeAnimation from "@/components/global/fade";

const Hero = () => {
  return (
    <div className="h-[max(100%,100vh)] bg-orange-50">
      <main className="contain relative grid gap-6 overflow-hidden lg:grid-cols-2">
        <TopographySvg
          color="black"
          className="absolute -bottom-[50%] -left-[25%] rotate-90 opacity-50"
        />
        <TopographySvg
          color="white"
          className="absolute -right-[25%] -top-[50%] z-10 rotate-12"
        />
        <section className="relative z-20 flex w-full flex-col gap-8 pt-32 max-lg:items-center max-lg:text-center lg:max-w-lg lg:pb-20">
          <h1 className="animate-text font-heading text-6xl font-semibold">
            Value your time and money. <br /> Save both.
          </h1>
          <div className="h-px w-4/5 rounded-full bg-primary" />
          <FadeAnimation duration={1}>
            <p className="text-slate-700">
              The smart way to handle bills, invoices, expenses, budgets, and
              business credit—all in one platform.
            </p>
          </FadeAnimation>
          <FadeAnimation duration={2}>
            <SubmitEmailForm />
          </FadeAnimation>
        </section>
        <section className="relative min-h-full max-lg:py-10">
          <div className="absolute -right-[15vw] -top-[10vw] h-[53vw] max-h-[80rem] w-[53vw] max-w-[80rem] rounded-full bg-black max-lg:-z-10" />
          <FadeAnimation
            className="-right-16 top-32 z-20 lg:absolute"
            direction="left"
            duration={3}
          >
            <Image
              src="/assets/images/home/nextgenlaptop.png"
              alt="nextgen dashboard image"
              width={1500}
              height={1500}
              quality={100}
              className="w-screen min-w-full"
            />
          </FadeAnimation>
          <FadeAnimation
            className="absolute bottom-4 z-30 max-lg:-right-10 max-lg:w-1/2 lg:-right-40 lg:bottom-10"
            direction="left"
            duration={4}
          >
            <Image
              src="/assets/images/home/blank_smartphone_mockup_isolate_on_background.png"
              alt="nextgen dashboard image"
              width={350}
              height={250}
              quality={100}
            />
          </FadeAnimation>
        </section>
      </main>
    </div>
  );
};

export default Hero;
