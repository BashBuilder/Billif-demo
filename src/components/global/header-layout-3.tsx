import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { signupLink } from "@/data/links";
import { Button } from "../ui/button";
import CalendlyWidget from "../Widget/calendly";
import Fade from "./fade";

interface HeaderLayout3Props {
  badgeText?: string;
  mainTitle?: string;
  description?: string;
  subTitle?: string;
  showImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  showGetStartedButton?: boolean;
  showCalendlyWidget?: boolean;
  additionalDesignElements?: React.ReactNode;
}

const HeaderLayout3 = ({
  badgeText,
  mainTitle,
  description,
  subTitle,
  imageSrc,
  imageAlt,
  showGetStartedButton,
  showCalendlyWidget,
  additionalDesignElements,
}: HeaderLayout3Props) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              {badgeText && (
                <Fade duration={0.3}>
                  <Badge
                    variant="secondary"
                    className="border-teal-200 bg-teal-50 text-teal-700"
                  >
                    {badgeText}
                  </Badge>
                </Fade>
              )}
              <Fade duration={0.5}>
                <h1 className="text-4xl font-bold leading-tight text-primary lg:text-6xl">
                  {mainTitle}{" "}
                  <span className="text-teal-600"> {subTitle} </span>
                </h1>
              </Fade>
              <Fade duration={0.7}>
                <p className="text-xl leading-relaxed text-slate-600">
                  {description}
                </p>
              </Fade>
            </div>

            <Fade duration={0.9} className="flex flex-col gap-4 sm:flex-row">
              {showGetStartedButton && (
                <Link href={signupLink}>
                  <Button size="lg" variant="outline">
                    Get started for free
                  </Button>
                </Link>
              )}
              {showCalendlyWidget && <CalendlyWidget />}
            </Fade>
            {additionalDesignElements}
          </div>

          {imageSrc && (
            <Fade duration={0.7} className="relative">
              <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt || ""}
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-lg"
                />
              </div>
            </Fade>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeaderLayout3;
