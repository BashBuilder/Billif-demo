import Demo from "@/components/global/demo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const pricingData = [
  {
    title: "Premium",
    price: "49,999",
    description: [
      "Everything in Essential Package plus",
      "Automate 2-way sync with accounting software",
      "QuickBooks and Xero Bespoke support",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom price",
    description: [
      "Everything in Premium Package plus;",
      "Custom integration and setup",
      "Custom reconciliation",
    ],
  },
];

const PricingDetail = () => {
  return (
    <section className="space-y-16 bg-gradient-to-b from-orange-100 to-white pb-20">
      <div className="relative bg-white pt-20">
        <Image
          src="/assets/images/accountPayable/unsplash_ULJCBY8Tcfg.png"
          alt="Approval software"
          width={2000}
          height={2000}
          className="absolute left-0 top-0 h-full object-cover opacity-20"
        />
        <div className="contain relative z-10 space-y-8 pb-20 pt-12 text-center">
          <h1 className="text-center font-heading text-5xl font-semibold text-orange-dark">
            Plans and pricing
          </h1>
          <p className="mx-auto mt-8 max-w-screen-lg text-center">
            Spend 50% less time on AP and automate invoicing and get paid 2x
            faster. Access credit lines from Startups, established brands, and
            accountants do more with NextGen Revenue Paymentech.
          </p>
          <div className="flex items-center justify-center gap-8">
            <div>
              <Demo />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="contain space-y-8">
        <h2 className="animate-pulse py-24 text-center font-heading text-4xl font-semibold text-orange-dark">
          Coming soon ...
        </h2>
      </div> */}
      {/* added some comment */}
      <div className="contain space-y-8">
        <h2 className="text-center font-heading text-3xl font-semibold text-orange-dark">
          Account Payable and Account Receivable
        </h2>

        <div className="mx-auto grid max-w-screen-md gap-6 md:grid-cols-2">
          <div className="col-span-2 w-full space-y-6 rounded-2xl bg-white p-6 shadow">
            <h5 className="font-heading text-lg text-orange-dark">
              Essentials
            </h5>
            <div className="flex gap-1">
              <span>₦</span>
              <h1 className="font-heading text-3xl text-orange-dark">39,999</h1>
              <p className="text-xs text-black/50">user/month</p>
            </div>
            <div className="grid justify-between gap-2 md:grid-cols-2">
              <div className="space-y-2">
                <h6 className="font-heading text-sm font-semibold text-orange-dark">
                  Payable
                </h6>
                <ul className="list-disc space-y-2 pl-4 text-sm text-black/70">
                  <li>Easily enter bills</li>
                  <li>Automate approval workflows</li>
                  <li>Pay by Bank Transfer</li>
                  <li>Manage bills from a centralized inbox</li>
                  <li>Set standard approval policies</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h6 className="font-heading text-sm font-semibold text-orange-dark">
                  Receivable
                </h6>
                <ul className="list-disc space-y-2 pl-4 text-sm text-black/70">
                  <li>Create professional, custom invoices</li>
                  <li>Send invoices flexibly</li>
                  <li>Track invoices flexibly</li>
                  <li>Automate payment reminders</li>
                  <li>Get paid through payment link</li>
                  <li>Create recurring invoices</li>
                </ul>
              </div>
            </div>
            <div>
              <Link
                href="#"
                className="cursor-pointer rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white"
              >
                Request a demo
              </Link>
            </div>
          </div>
          {pricingData.map((item) => (
            <div
              key={item.title}
              className="col-span-1 w-full space-y-6 rounded-2xl bg-white p-6 shadow"
            >
              <h5 className="font-heading text-lg text-orange-dark">
                {item.title}
              </h5>
              {item.price === "Custom price" ? (
                <h1 className="font-heading text-3xl text-orange-dark">
                  Custom price
                </h1>
              ) : (
                <div className="flex gap-1">
                  <span>₦</span>
                  <h1 className="font-heading text-3xl text-orange-dark">
                    {item.price}
                  </h1>
                  <p className="text-xs text-black/50">user/month</p>
                </div>
              )}

              <ul className="list-disc space-y-2 pl-4 text-sm text-black/70">
                {item.description?.map((item, index) => (
                  <li key={index} className="text-sm text-black/70">
                    {item}
                  </li>
                ))}
              </ul>
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
