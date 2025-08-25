import Fade from "@/components/global/fade";
import { Button } from "@/components/ui/button";
import { signupLink } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const serviceDescriptionContent = [
  {
    image: "/assets/images/18851.jpg",
    heading: "Simplify your purchasing",
    subHeading: "Bill-if Account payable",
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
    image: "/assets/images/122994.jpg",
    heading: "Automate payments & accounting",
    subHeading: "Bill-if Financial Operations Platform",
    description:
      "Confidently automate your financial operations with simple integration into your tech stack.",
    list: [
      "Automatic sync with leading accounting software.",
      "Aggregated cash flow and task list",
      "Easy integration",
    ],
  },
  {
    image: "/assets/images/2149149673.jpg",
    heading: "Increase profitability with spend controls",
    subHeading: "Bill-if Ease of operations",
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
    <section className="space-y-20 bg-blue-50 py-20">
      <Fade>
        <h1 className="contain max-w-screen-2xl text-center font-heading text-4xl font-semibold text-primary">
          Maximize your savings with streamlined purchasing and payments
        </h1>
      </Fade>
      <div className="contain space-y-28">
        {serviceDescriptionContent.map((details, index) => (
          <div
            key={index}
            className="flex gap-12 max-lg:flex-col lg:items-center lg:justify-around lg:gap-20"
          >
            <div
              className={`relative flex h-[80vw] max-h-[25rem] w-[80vw] max-w-[30rem] items-center max-lg:mx-auto ${index % 2 && "justify-end lg:order-2"}`}
            >
              <Fade
                direction={index % 2 ? "left" : "right"}
                className="relative z-10 h-full w-full"
              >
                <Image
                  src={details.image}
                  alt={details.heading}
                  width={1000}
                  height={1000}
                  className={`h-full w-full rounded-md object-cover`}
                />
              </Fade>
              <Fade
                direction={index % 2 ? "left" : "right"}
                duration={1}
                className={`absolute -top-10 size-40 rounded-full bg-primary/90 ${index % 2 ? "-right-10" : "-left-10"} `}
              />

              <Fade
                direction={index % 2 ? "left" : "right"}
                duration={1.3}
                className={`absolute -bottom-10 size-20 rounded-full border-2 border-primary/70 ${index % 2 ? "-left-10" : "-right-10"} `}
              />
            </div>

            <div className="space-y-2 max-lg:px-4">
              <Fade>
                <h4>{details.subHeading}</h4>
              </Fade>
              <Fade>
                <h3 className="font-heading text-3xl font-semibold text-primary">
                  {details.heading}
                </h3>
              </Fade>
              <Fade>
                <p className="py-4 text-orange-950/90">{details.description}</p>
              </Fade>
              <ul className="space-y-2 *:ml-8 *:text-orange-950/90">
                {details.list.map((item) => (
                  <li
                    key={item}
                    className="relative before:absolute before:-left-4 before:top-1/2 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-orange-800"
                  >
                    <Fade>{item}</Fade>
                  </li>
                ))}
              </ul>
              <Fade className="pt-4">
                <Link href={signupLink}>
                  <Button>Buy Now, 14 days free trial</Button>
                </Link>
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;
