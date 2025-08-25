import Fade from "@/components/global/fade";
import { dashboardLink } from "@/data/links";
import Link from "next/link";
import React from "react";

const receivableContent = [
  {
    heading: "Create professional invoices",
    description:
      "Easily keep track of your invoices with automatic unique numbering. Choose a template that best suits your brand and service.",
    image: "/assets/images/accountReceivable/Frame 7161.png",
  },
  {
    heading: "Simplify tracking and follow-up",
    description:
      "Track the status of your invoice, so you know exactly when it's sent. Filter your invoices by status for quick information on receivables.",
    image: "/assets/images/accountReceivable/Frame 7162.png",
  },
  {
    heading: "Send with flexibility",
    description:
      "Send your invoices by email, or have us send them by email. Schedule the date to send your invoices, or send on the spot.",
    image: "/assets/images/accountReceivable/Frame 7163.png",
  },
  {
    heading: "Stay in sync",
    description:
      "Sync customers, invoices, accounts, classes and more - two ways. Set it and forget it - or run sync manually. The control is up to you.",
    image: "/assets/images/accountReceivable/Frame 7164.png",
  },
];

const AccountReceivableDetail = () => {
  return (
    <section className="bg-slate-100 py-20">
      <div className="contain space-y-10">
        {receivableContent.map((item, index) => (
          <div
            key={index}
            className="contain mx-auto flex flex-wrap items-center justify-center gap-8 lg:gap-16"
          >
            <div
              className={`space-y-4 md:max-w-md ${index % 2 && "md:order-2"} `}
            >
              <Fade>
                <h3 className="font-heading text-3xl font-semibold text-primary">
                  {item.heading}
                </h3>
              </Fade>
              <Fade>
                <p>{item.description}</p>
              </Fade>
              <Fade className="pt-4">
                <Link
                  href={dashboardLink}
                  className="rounded-full bg-primary px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80"
                >
                  14 days free trial
                </Link>
              </Fade>
            </div>
            <div>
              <Fade className="max-h-80 w-full max-w-sm rounded-md bg-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-full w-full rounded-md object-cover"
                  src={item.image}
                  alt=""
                />
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccountReceivableDetail;
