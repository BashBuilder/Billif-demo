"use client";
import ContactForm from "./ContactForm";
import ContactInfo from "./contactInfo";
import ContactFaq from "./contact-faq";

const page = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white pb-20 pt-20">
      <div className="contain space-y-12">
        <section className="relative grid gap-8 md:grid-cols-2">
          <ContactInfo />
          <ContactForm closeDialog={() => {}} />
        </section>
        <ContactFaq />
      </div>
    </section>
  );
};

export default page;
