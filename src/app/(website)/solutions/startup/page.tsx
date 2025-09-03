import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Clock } from "lucide-react";
import Image from "next/image";

export default function StartupsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="border-teal-200 bg-teal-50 text-teal-700"
                >
                  Built for Growth
                </Badge>
                <h1 className="text-navy-900 text-4xl font-bold leading-tight lg:text-6xl">
                  Finally, financial automation built for{" "}
                  <span className="text-teal-600">high-growth startups</span>
                </h1>
                <p className="text-xl leading-relaxed text-slate-600">
                  Scale your financial operations with powerful automation
                  software—so you can run spend, approvals, and reporting in one
                  place.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-teal-600 px-8 text-white hover:bg-teal-700"
                >
                  Get started for free
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-navy-200 text-navy-700 bg-transparent"
                >
                  Schedule a demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-teal-100"
                      >
                        <span className="text-xs font-medium text-teal-700">
                          ★
                        </span>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">
                    2,000+ startups
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
                <Image
                  src="/startup-dashboard-interface.png"
                  alt="Startup Dashboard Interface"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-navy-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold lg:text-5xl">
            Get startup financial automation that scales with you
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-300">
            From day one to your startup, everything you need to manage spend,
            corporate cards, expense tracking, and bill pay—all in one place.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-navy-900 text-3xl font-bold">
                A single platform for your startup
              </h3>
              <p className="text-lg text-slate-600">
                Bill combines cards, payments, bill pay, and accounting
                integrations into one platform built for startups. Migration
                from your current setup is seamless—and grows with you at every
                stage.
              </p>
              <Button className="bg-teal-600 text-white hover:bg-teal-700">
                Complete setup →
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/startup-growth-metrics.png"
                alt="Startup Growth Metrics"
                width={500}
                height={350}
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                  <Zap className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-navy-900">
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
                <CardTitle className="text-navy-900">
                  No personal guarantee, built for startups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Bill's business credit cards for startups don't require a
                  personal guarantee. We evaluate your business on its own
                  financial merit.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-navy-900">
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
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-navy-900 mb-4 text-3xl font-bold lg:text-4xl">
              Close your books on time, every time
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              Bill integrates seamlessly with QuickBooks, Xero, and NetSuite.
              Your startup's financial data flows directly into your accounting
              software.
            </p>
          </div>

          <div className="grid items-center justify-center gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                NetSuite
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-2 text-2xl font-bold text-purple-600">
                Sage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold lg:text-5xl">
              Ready to scale your startup's finances?
            </h2>
            <p className="text-xl text-slate-300">
              Join thousands of startups that trust Bill Intelligent Flow
              Technologies for their financial automation.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-teal-600 px-8 text-white hover:bg-teal-700"
              >
                Start free trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:text-navy-900 border-white bg-transparent text-white hover:bg-white"
              >
                Schedule demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
