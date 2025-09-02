/* eslint-disable @next/next/no-img-element */
import ContactForm from "./ContactForm";
import ContactInfo from "./contactInfo";
import ContactFaq from "./contact-faq";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const page = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white pb-20 pt-20">
      <div className="contain space-y-12">
        <section className="rounded-lg bg-gradient-to-br from-primary to-primary/80 py-20 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="secondary" className="mb-6">
                Get In Touch
              </Badge>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Ready to Transform Your Financial Operations?
              </h1>
              <p className="mb-8 text-xl leading-relaxed opacity-90">
                Connect with our experts to discover how Bill Intelligent Flow
                Technologies can streamline your financial processes and drive
                efficiency across your organization.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary">
                  Schedule Free Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* <div>
          <p className="text-center text-sm">How can we help you?</p>
          <h1 className="text-center text-4xl font-semibold text-primary">
            Get in touch
          </h1>
        </div> */}
        <section className="relative grid gap-8 md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </section>
        <ContactFaq />
      </div>
    </section>
  );
};

export default page;
