import Image from "next/image";
import Link from "next/link";
import React from "react";

const pricingData = [
  {
    title: "Essentials",
    price: 45,
    description:
      "Spend 50% less time on AP or automate invoicing and get paid 2x faster.",
  },
  {
    title: "Team",
    price: 55,
    description:
      "Get more granular controls and automatic 2-way sync with leading accounting software.",
  },
  {
    title: "Corporate",
    price: 79,
    description:
      "Get additional customization and confidently manage AP and AR all in one place.",
  },
  {
    title: "Enterprise",
    price: "Custom price",
    description:
      "Unlock enhanced security, premium support, multi-location accounting capabilities, and more.",
  },
];

const PricingDetail = () => {
  return (
    <section className="space-y-16 bg-gradient-to-b from-orange-100 to-white pb-20">
      <div className="relative pt-20">
        <Image
          src="/assets/images/approvalImage.png"
          alt="Approval software"
          width={2000}
          height={2000}
          className="absolute left-0 top-0 h-full object-cover opacity-20"
        />
        <div className="contain space-y-8 pb-20 pt-12 text-center">
          <h1 className="text-orange-dark font-heading text-center text-5xl font-semibold">
            Plans and pricing
          </h1>
          <p className="mx-auto mt-8 max-w-screen-lg text-center">
            Spend 50% less time on AP and automate invoicing and get paid 2x
            faster. Access credit lines from Startups, established brands, and
            accountants do more with NextGen Revenue Paymentech.
          </p>
          <div className="flex items-center justify-center gap-8">
            <div>
              <Link
                href="#"
                className="cursor-pointer rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
              >
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="contain space-y-8">
        <h2 className="font-heading text-orange-dark text-center text-3xl font-semibold">
          Account Payable and Account Receivable
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {pricingData.map((item) => (
            <div
              key={item.title}
              className="w-full space-y-6 rounded-2xl bg-white p-6 shadow-md md:max-w-64"
            >
              <h5 className="font-heading text-orange-dark text-lg">
                {item.title}
              </h5>
              {item.price === "Custom price" ? (
                <h1 className="font-heading text-orange-dark text-3xl">
                  Custom price
                </h1>
              ) : (
                <div className="flex gap-1">
                  <span>$</span>
                  <h1 className="font-heading text-orange-dark text-6xl">
                    {item.price}
                  </h1>
                  <p className="text-xs text-black/50">
                    user/
                    <br />
                    month
                  </p>
                </div>
              )}

              <p className="text-sm text-black/70">{item.description}</p>
              <div className="">
                <Link
                  href="#"
                  className="cursor-pointer rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white"
                >
                  Request a demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingDetail;
