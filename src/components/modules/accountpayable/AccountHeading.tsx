import Fade from "@/components/global/fade";
import SubmitEmailForm from "@/components/global/SubmitEmailForm";
import TopographySvg from "@/components/global/TopographySvg";
import Image from "next/image";
import React from "react";

interface PageProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const AccountHeading = ({ image, title, subtitle, description }: PageProps) => {
  return (
    <section className="bg-orange-50">
      <div className="contain relative mx-auto grid gap-10 overflow-hidden pt-32 lg:grid-cols-2">
        <TopographySvg
          color="black"
          className="absolute -bottom-[50%] -left-[25%] rotate-90 opacity-50"
        />
        <section className="relative z-10 flex w-full flex-col gap-5 max-lg:items-center max-lg:text-center lg:max-w-lg lg:pb-20">
          <Fade>
            <p className="text-orange-dark uppercase"> {subtitle} </p>
          </Fade>
          <Fade duration={0.8}>
            <h1 className="font-heading text-4xl font-semibold">{title}</h1>
          </Fade>
          <div className="h-px w-4/5 rounded-full bg-primary" />
          <Fade duration={1.2}>
            <p className="text-slate-700">{description}</p>
          </Fade>
          <Fade duration={1.6} className="w-full max-w-xl max-lg:mx-auto">
            <SubmitEmailForm />
          </Fade>
        </section>
        <Fade direction="left" className="min-h-full max-lg:py-10">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            quality={100}
            className="relative z-10 mx-auto max-h-72 rounded-md object-cover"
          />
        </Fade>
      </div>
    </section>
  );
};

export default AccountHeading;
