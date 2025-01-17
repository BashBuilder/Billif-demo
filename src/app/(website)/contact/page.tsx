/* eslint-disable @next/next/no-img-element */
import ContactForm from "./ContactForm";
import { MapPinIcon } from "lucide-react";

const page = () => {
  return (
    <section className="bg-gradient-to-b from-orange-100 to-white pb-20 pt-32">
      <div className="contain space-y-12">
        <div>
          <p className="text-center text-sm">How can we help you?</p>
          <h1 className="text-center text-4xl font-semibold text-orange-dark">
            Get in touch
          </h1>
        </div>
        <section className="relative grid gap-8 md:grid-cols-2">
          <article className="space-y-6 overflow-hidden rounded-md bg-white/50 pt-6 shadow-md">
            <div className="space-y-4 px-6">
              <h3 className="text-2xl font-semibold text-orange-dark">
                Contact Information
              </h3>
              <div />
              <p className="flex max-w-lg items-center gap-2">
                <MapPinIcon className="size-4 text-orange-dark" />
                Plot 5 Chief Yesufu Abiodun Oniru Road. Victoria Island.
              </p>
            </div>
            <img
              src="/assets/images/1967.jpg"
              alt="Nextgen contact support"
              className="h-full w-full rounded-md object-cover shadow-sm"
            />
          </article>
          <ContactForm />
        </section>
      </div>
    </section>
  );
};

export default page;
