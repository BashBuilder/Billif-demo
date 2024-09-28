import Image from "next/image";
import React from "react";

const serviceDescriptionContent = [
  {
    image: "/assets/images/home/user writing description.png",
    heading: "Simplify your purchasing",
    subHeading: "NEXTGEN ACCOUNT  PAYABLE",
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
    <section className="contain space-y-20 py-20">
      {serviceDescriptionContent.map((details, index) => (
        <div
          key={index}
          className="flex gap-12 max-lg:flex-col lg:items-center lg:justify-around"
        >
          <div
            className={`flex items-center max-lg:mx-auto ${index % 2 && "justify-end lg:order-2"}`}
          >
            <div
              className={`relative h-[80vw] max-h-[25rem] w-[80vw] max-w-[30rem] overflow-hidden bg-primary ${index % 2 ? "rounded-tr-[10rem]" : "rounded-tl-[10rem]"} `}
            >
              <Image
                src={details.image}
                alt={details.heading}
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
              <div
                className={`-top-10 -z-10 size-40 rounded-full bg-orange-900 ${index % 2 ? "-right-10" : "-left-10"} `}
              />
              <div
                className={`absolute -bottom-10 -z-10 size-20 rounded-full border-2 border-orange-700 ${index % 2 ? "-left-10" : "-right-10"} `}
              />
            </div>
          </div>

          <div className="space-y-2 max-lg:px-4">
            <h4>{details.subHeading}</h4>
            <h3 className="text-orange-dark text-xl font-semibold">
              {details.heading}
            </h3>
            <p> {details.description} </p>
            <ul className="*:ml-8">
              {details.list.map((item) => (
                <li
                  key={item}
                  className="relative before:absolute before:-left-4 before:top-1/2 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-orange-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Details;
