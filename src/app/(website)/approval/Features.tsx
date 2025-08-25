import { dashboardLink } from "@/data/links";
import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <section className="bg-orange-50/50 py-20">
      <div className="contain space-y-8">
        <div className="space-y-3">
          <h2 className="font-heading text-4xl font-semibold text-primary">
            Approval software features
          </h2>
          <p>
            Shorten cycle times between requesters and approvers by routing
            requests to the right teams for approvals.
          </p>
        </div>
        <ul className="flex flex-wrap items-start gap-16 *:relative *:ml-10 *:max-w-sm *:space-y-2 *:before:absolute *:before:-left-10 *:before:h-full *:before:w-px *:before:rounded-full *:before:bg-primary">
          <li>
            <h3 className="font-heading text-xl font-medium">
              Unlimited approval workflows
            </h3>
            <p className="text-primary/70">
              Create custom approval routings that match your organization’s
              structure
            </p>
          </li>
          <li>
            <h3 className="font-heading text-xl font-medium">
              Approve by budget
            </h3>
            <p className="text-primary/70">
              Easily understand the potential impact of a purchase or expense on
              your budget
            </p>
          </li>
          <li>
            <h3 className="font-heading text-xl font-medium">
              Notifications and chat
            </h3>
            <p className="text-primary/70">
              Remove bottlenecks with configurable notifications on email,
              mobile, and in Slack
            </p>
          </li>
          <li>
            <h3 className="font-heading text-xl font-medium">
              Approver delegation
            </h3>
            <p className="text-primary/70">
              Approvers can push pending and incoming requests to a different
              approver for a set time period
            </p>
          </li>
        </ul>

        <div className="flex items-center justify-center">
          <Link
            href={dashboardLink}
            className="cursor-pointer rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
          >
            Explore our platform
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
