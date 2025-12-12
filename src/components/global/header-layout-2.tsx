import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import CalendlyWidget from "../Widget/calendly";
import Fade from "./fade";
import GetStartedBtn from "../general/get-started-btn";

interface HeaderLayout2Props {
  showBadge?: boolean;
  badgeText?: string;
  showContactButton?: boolean;
  showCalendlyButton?: boolean;
  mainTitle?: string;
  subTitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  stat3Value?: string;
  stat3Label?: string;
  showTrialButton?: boolean;
}

const HeaderLayout2 = ({
  showBadge,
  badgeText,
  showContactButton,
  showCalendlyButton,
  mainTitle,
  subTitle,
  description,
  image,
  imageAlt,
  stat1Value,
  stat1Label,
  stat2Value,
  stat2Label,
  stat3Value,
  stat3Label,
  showTrialButton,
}: HeaderLayout2Props) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1B3057] via-[#1B3057] to-secondary text-white">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              {showBadge && (
                <Fade duration={0.2}>
                  <Badge
                    variant="secondary"
                    className="border-white/20 bg-white/10 text-white"
                  >
                    {badgeText}
                  </Badge>
                </Fade>
              )}
              <Fade duration={0.4}>
                <h1 className="text-balance text-5xl font-bold leading-tight">
                  {mainTitle}
                  <span className="text-secondary">{subTitle}</span>
                </h1>
                <p className="text-pretty text-xl leading-relaxed text-blue-100">
                  {description}
                </p>
              </Fade>
            </div>

            <Fade duration={0.7} className="flex flex-col gap-4 sm:flex-row">
              {showContactButton && (
                <Link href="/contact">
                  <Button className="bg-secondary text-white hover:bg-secondary/90">
                    Contact Sales
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              )}
              {showCalendlyButton && <CalendlyWidget />}
              {showTrialButton && <GetStartedBtn />}
              {/* <Demo /> */}
            </Fade>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stat1Value && stat1Label && (
                <Fade duration={0.7} className="text-center">
                  <div className="text-3xl font-bold text-secondary">
                    {stat1Value}
                  </div>
                  <div className="text-sm text-blue-200">{stat1Label}</div>
                </Fade>
              )}
              {stat2Value && stat2Label && (
                <Fade duration={0.8} className="text-center">
                  <div className="text-3xl font-bold text-secondary">
                    {stat2Value}
                  </div>
                  <div className="text-sm text-blue-200">{stat2Label}</div>
                </Fade>
              )}
              {stat3Value && stat3Label && (
                <Fade duration={0.9} className="text-center">
                  <div className="text-3xl font-bold text-secondary">
                    {stat3Value}
                  </div>
                  <div className="text-sm text-blue-200">{stat3Label}</div>
                </Fade>
              )}
            </div>
          </div>

          <div className="relative">
            <Fade
              duration={0.3}
              className="relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
            >
              {imageAlt && (
                <Image
                  src={image || ""}
                  alt={imageAlt || ""}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              )}
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderLayout2;
