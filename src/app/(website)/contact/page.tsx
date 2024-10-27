import Image from "next/image";
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
        <div className="relative flex items-start justify-center gap-8 max-md:flex-col">
          <div className="space-y-6 rounded-md bg-white/50 pt-6 shadow-md">
            <div className="space-y-4 px-6">
              <h3 className="text-2xl font-semibold text-orange-dark">
                Contact Information
              </h3>
              <div />
              <p className="flex max-w-lg flex-wrap items-center gap-2">
                <MapPinIcon className="size-4 text-orange-dark" />
                km18 lekki-Epe expressway, Agungi, Lagos, Nigeria.
              </p>
            </div>
            <Image
              src="/assets/images/contactimage.png"
              alt="Nextgen contact support"
              width={400}
              height={800}
              quality={100}
              className="max-h-[36.5rem] w-full rounded-md object-cover shadow-sm"
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default page;
