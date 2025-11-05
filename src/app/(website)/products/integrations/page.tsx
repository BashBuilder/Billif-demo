import Demo from "@/components/global/demo";
import Faq from "@/components/global/Faq";
// import AccountHeading from "@/components/modules/accountpayable/AccountHeading";
import ContactUs from "@/components/modules/general/GetStarted";
import Support from "@/components/modules/general/Support";
import IntegrationsDetails from "@/components/modules/integrations/IntegrationsDetails";
import Levelup from "@/components/modules/integrations/Levelup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { integrationsFaq } from "@/data/faq";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B3057] via-[#1B3057] to-secondary text-white">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="border-white/20 bg-white/10 text-white"
                >
                  Accounting Integrations
                </Badge>
                <h1 className="text-balance text-5xl font-bold leading-tight">
                  Automation. Integration.{" "}
                  <span className="text-secondary">
                    We&apos;ve got you covered.
                  </span>
                </h1>
                <p className="text-pretty text-xl leading-relaxed text-blue-100">
                  Simplify your workflow with seamless integrations.
                  Effortlessly connect your accounting tools, automate data
                  sync, and streamline processes so you can focus on what
                  matters most.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button className="bg-secondary text-white hover:bg-secondary/90">
                    Contact Sales
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Demo />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">3+</div>
                  <div className="text-sm text-blue-200">
                    Integrated Platforms
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-blue-200">
                    Data Sync Accuracy
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">Zero</div>
                  <div className="text-sm text-blue-200">
                    Manual Entry Needed
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <Image
                  src="/assets/images/2606569_5904.jpg"
                  alt="Business Analytics Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Levelup />
      <IntegrationsDetails />
      <Support />
      <Faq faq={integrationsFaq} />
      <ContactUs />
    </main>
  );
};

export default page;
