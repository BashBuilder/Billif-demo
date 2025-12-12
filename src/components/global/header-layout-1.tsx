import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import CalendlyWidget from "../Widget/calendly";
import Fade from "./fade";

interface HeaderLayout1Props {
  showContactButton?: boolean;
  showCalendlyButton?: boolean;
  mainTitle?: string;
  subTitle?: string;
  description?: string;
}

const HeaderLayout1 = ({
  showContactButton,
  showCalendlyButton,
  mainTitle,
  subTitle,
  description,
}: HeaderLayout1Props) => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-secondary py-20 text-white lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <Fade duration={0.4}>
            <h1 className="text-navy-900 text-4xl font-bold lg:text-6xl">
              {mainTitle} <span className="text-teal-600">{subTitle}</span>
            </h1>
          </Fade>
          <Fade duration={0.7}>
            <p className="mx-auto max-w-3xl text-slate-300">{description}</p>
          </Fade>

          <Fade duration={1} className="flex justify-center gap-4">
            {showContactButton && (
              <Link href="/contact">
                <Button className="bg-teal-600 px-8 text-white hover:bg-teal-700">
                  Contact sales
                </Button>
              </Link>
            )}
            {showCalendlyButton && <CalendlyWidget />}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default HeaderLayout1;
