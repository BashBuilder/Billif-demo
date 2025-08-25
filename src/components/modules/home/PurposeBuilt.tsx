import Fade from "@/components/global/fade";
import Topography2Svg from "@/components/global/Topography2Svg";
import { dashboardLink } from "@/data/links";
import Link from "next/link";
import React from "react";

const PurposeBuilt = () => {
  return (
    <section className="bg-primary">
      <section className="contain relative overflow-hidden py-20 text-center">
        <Topography2Svg
          color="white"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5"
        />
        <div className="relative space-y-8">
          <Fade>
            <h2 className="font-heading text-4xl font-semibold text-slate-50">
              Purpose-built to save companies money
            </h2>
          </Fade>
          <Fade>
            <p className="text-blue-50">
              Address AP and purchasing challenges, from rogue spending and
              manual processes to uninformed purchasing decisions, that cost you
              time and money. Bill-if empowers your organization to control and
              reduce costs while enhancing operational efficiencies, freeing up
              time to focus on higher-value initiatives.
            </p>
          </Fade>
          <Fade>
            <Link
              href={dashboardLink}
              className="cursor-pointer rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary"
            >
              Explore our platform
            </Link>
          </Fade>
        </div>
      </section>
    </section>
  );
};

export default PurposeBuilt;
