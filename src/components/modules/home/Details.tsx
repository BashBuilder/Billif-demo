import { dashboardLink } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const serviceDescriptionContent = [
  {
    image: "/assets/images/home/user writing description.png",
    heading: "Simplify your purchasing",
    subHeading: "NEXTGEN Account payable",
    description:
      "Provide everyone in your organization with the tools to make more efficient and responsible spend decisions, saving time and money that can be reinvested into your business.",
    list: [
      "Automatic PO generation",
      "Order management and tracking",
      "Vendor management and consolidation",
      "Strategic sourcing",
    ],
  },
  {
    image: "/assets/images/home/invoice image.png",
    heading: "Automate payments & accounting",
    subHeading: "NEXTGEN Financial Operations Platform",
    description:
      "Confidently automate your financial operations with simple integration into your tech stack.",
    list: [
      "Automatic sync with leading accounting software.",
      "Aggregated cash flow and task list",
      "Easy integration",
    ],
  },
  {
    image: "/assets/images/home/clothings.png",
    heading: "Increase profitability with spend controls",
    subHeading: "NEXTGEN Ease of operations",
    description:
      "Enhance your bottom line by controlling every purchase, eliminating unauthorized spending, and improving spend visibility.",
    list: [
      "Automated approval workflows",
      "Customizable budgets",
      "Real-time spend reporting",
    ],
  },
];

const Details = () => {
  return (
    <section className="space-y-20 bg-orange-100/50 py-20">
      <h1 className="contain font-heading text-orange-dark max-w-screen-lg text-center text-4xl font-semibold">
        Maximize your savings with streamlined purchasing and payments
      </h1>
      <div className="contain space-y-28">
        {serviceDescriptionContent.map((details, index) => (
          <div
            key={index}
            className="flex gap-12 max-lg:flex-col lg:items-center lg:justify-around lg:gap-20"
          >
            <div
              className={`relative flex h-[80vw] max-h-[25rem] w-[80vw] max-w-[30rem] items-center max-lg:mx-auto ${index % 2 && "justify-end lg:order-2"}`}
            >
              <Image
                src={details.image}
                alt={details.heading}
                width={1000}
                height={1000}
                className={`relative z-10 h-full w-full rounded-md object-cover ${index % 2 ? "rounded-tr-[10rem]" : "rounded-tl-[10rem]"} `}
              />
              <div
                className={`absolute -top-10 size-40 rounded-full bg-orange-900 ${index % 2 ? "-right-10" : "-left-10"} `}
              />
              <div
                className={`absolute -bottom-10 size-20 rounded-full border-2 border-orange-700 ${index % 2 ? "-left-10" : "-right-10"} `}
              />
            </div>

            <div className="space-y-2 max-lg:px-4">
              <h4>{details.subHeading}</h4>
              <h3 className="text-orange-dark font-heading text-3xl font-semibold">
                {details.heading}
              </h3>
              <p className="py-4 text-orange-950/90"> {details.description} </p>
              <ul className="space-y-2 *:ml-8 *:text-orange-950/90">
                {details.list.map((item) => (
                  <li
                    key={item}
                    className="relative before:absolute before:-left-4 before:top-1/2 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-orange-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  href={dashboardLink}
                  className="rounded-full bg-primary px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;
