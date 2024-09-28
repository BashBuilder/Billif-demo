import Topography2Svg from "@/components/global/Topography2Svg";
import Link from "next/link";
import React from "react";

const PurposeBuilt = () => {
  return (
    <section className="contain bg-orange-dark relative overflow-hidden py-20 text-center">
      <Topography2Svg
        color="white"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-50 opacity-5"
      />
      <div className="relative space-y-8">
        <h2 className="text-3xl font-semibold text-slate-50">
          Purpose-built to save companies money
        </h2>
        <p className="text-orange-100">
          Address AP and purchasing challenges, from rogue spending and manual
          processes to uninformed purchasing decisions, that cost you time and
          money. NextGen empowers your organization to control and reduce costs
          while enhancing operational efficiencies, freeing up time to focus on
          higher-value initiatives.
        </p>
        <div>
          <Link
            href="#"
            className="text-orange-dark cursor-pointer rounded-full bg-white px-5 py-3 text-sm font-semibold"
          >
            Explore our platform
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PurposeBuilt;
