import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, Shield, Clock } from "lucide-react";
import Image from "next/image";
import CtaAction from "@/components/global/cta-action";
import Link from "next/link";
import { dashboardLink } from "@/data/links";
import HeaderLayout3 from "@/components/global/header-layout-3";
import Fade from "@/components/global/fade";

export default function StartupsPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderLayout3
        badgeText="Built for Growth"
        mainTitle="Finally, financial automation built for"
        subTitle="high-growth startups"
        description="Scale your financial operations with powerful automation software—so you can run spend, approvals, and reporting in one place."
        showGetStartedButton
        showCalendlyWidget
        imageSrc="/assets/images/5129994_20063.jpg"
        imageAlt="Startup Dashboard Interface"
        additionalDesignElements={
          <Fade duration={1} className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-teal-100"
                  >
                    <span className="text-xs font-medium text-teal-700">★</span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-slate-600">500+ startups</span>
            </div>
          </Fade>
        }
      />

      {/* Value Proposition */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-32 text-white">
        <Fade className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-2xl font-bold lg:text-4xl">
            Get startup financial automation that scales with you
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-300">
            From day one to your startup, everything you need to manage spend,
            corporate cards, expense tracking, and bill pay—all in one place.
          </p>
        </Fade>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">
            <Fade className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">
                A single platform for your startup
              </h3>
              <p className="pb-4 text-lg text-slate-600">
                Bill combines cards, payments, bill pay, and accounting
                integrations into one platform built for startups. Migration
                from your current setup is seamless—and grows with you at every
                stage.
              </p>
              <Link href={dashboardLink} className="pt-4">
                <Button className="bg-teal-600 text-white hover:bg-teal-700">
                  Complete setup →
                </Button>
              </Link>
            </Fade>
            <Fade className="relative">
              <Image
                src="/assets/images/13420.jpg"
                alt="Startup Growth Metrics"
                width={500}
                height={350}
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </Fade>
          </div>

          {/* Feature Cards */}
          <Fade className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                  <Zap className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-primary">
                  Cut burn, not corners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Save time and money with automated expense management and
                  intelligent spending controls—like credit card statements from
                  your bank.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-primary">
                  No personal guarantee, built for startups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Bill&apos;s business credit cards for startups don&apos;t
                  require a personal guarantee. We evaluate your business on its
                  own financial merit.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-primary">
                  Saves you time so you can build
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Spend less time on manual processes while you focus on
                  building. Set the right policy and controls, and let them
                  work.
                </CardDescription>
              </CardContent>
            </Card>
          </Fade>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <Fade className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary lg:text-4xl">
              Close your books on time, every time
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              Bill integrates seamlessly with QuickBooks, Xero, and Zoho Books.
              Your startup&apos;s financial data flows directly into your
              accounting software.
            </p>
          </Fade>

          <Fade className="grid items-center justify-center gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-2 text-2xl font-bold text-green-600">
                QuickBooks
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-2 text-2xl font-bold text-blue-600">Xero</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-2 text-2xl font-bold text-orange-600">
                Zoho Books
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-2 text-2xl font-bold text-purple-600">
                Sage
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* CTA Section */}
      <CtaAction />
    </div>
  );
}
