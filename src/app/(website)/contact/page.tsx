import Image from "next/image";
import ContactForm from "./ContactForm";

const page = () => {
  return (
    <section className="bg-gradient-to-b from-orange-100 to-white pb-20 pt-32">
      <div className="contain space-y-12">
        <div>
          <p className="text-center text-sm">How can we help you?</p>
          <h1 className="text-orange-dark text-center text-4xl font-semibold">
            Get in touch
          </h1>
        </div>
        <div className="relative flex justify-center gap-8 max-md:flex-col">
          <div className="">
            <Image
              src="/assets/images/contactimage.png"
              alt="Nextgen contact support"
              width={400}
              height={800}
              quality={100}
              className="rounded-md shadow-sm"
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default page;
